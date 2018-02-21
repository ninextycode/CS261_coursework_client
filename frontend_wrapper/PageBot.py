import flask
import flask_cors

import random
import json
import threading
import time

import frontend_wrapper.Log as l
import frontend_wrapper.Singleton as sn



logger = l.Logger("PageBot")


class PageBot(sn.Singleton):
    def set_bot_wrapper(self, bot_wrapper):
        self.bot_wrapper = bot_wrapper

    def __init__(self):
        self.bot_wrapper = None

        test_not_1 = {
            "type": "notification",
            "data": {
                "mime_type": "text/plain",
                "body": "NOTIFICATION 1"
            }
        }

        test_not_2 = {
            "type": "notification",
            "data": {
                "mime_type": "text/plain",
                "body": "NOTIFICATION 2"
            }
        }

        self.messages_to_send_to_client = [test_not_1, test_not_2]
        self.return_message_from_server_lock = threading.Lock()
        self.receive_message_from_server_lock = threading.Lock()

    def on_message_from_client(self, messagee_json):
        self.bot_wrapper.on_json_from_client(messagee_json)

    def send_to_client(self, message):
        with self.receive_message_from_server_lock:
            self.messages_to_send_to_client.append(message)

    def on_notification_request(self):
        with self.return_message_from_server_lock:
            t = self.messages_to_send_to_client
            self.messages_to_send_to_client = []
            message = {
                "type": "lsit",
                "data": t
            }
            return flask.jsonify(message)

    def on_message_return_next_response(self, message):
        self.receive_message_from_server_lock.acquire()
        self.on_message_from_client(message)
        with self.return_message_from_server_lock:
            old_length = len(self.messages_to_send_to_client)

            # start receiving messages from server only when we are ready
            # now the only possible async action on message stack should be addition
            self.receive_message_from_server_lock.release()
            while len(self.messages_to_send_to_client) == old_length:
                time.sleep(0.001)

            return flask.jsonify(self.messages_to_send_to_client.pop())

    def start(self):
        app = flask.Flask(__name__)
        flask_cors.CORS(app)

        @app.route("/", methods=['GET', 'POST'])
        def general_route():
            logger.log("Received: {}".format(flask.request.json))

            request_type = ""
            if flask.request.json is not None:
                request_type = flask.request.json.get("type", "")

            if request_type == "message":
                request_data = flask.request.json.get("data", {})
                response = self.on_message_return_next_response(request_data)
            elif request_type == "notifications_request":
                response = self.on_notification_request()
            else:
                response = flask.jsonify({"type": "message", "body": "Cannot get message type"})

            logger.log("Response: {}".format(response))
            return response

        flask_thread = threading.Thread(target=app.run)
        flask_thread.start()