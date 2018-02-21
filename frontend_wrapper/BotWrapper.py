import json

import frontend_wrapper.Singleton as sn
import frontend_wrapper.Log as l


logger = l.Logger("BotWrapper")


class BotWrapper(sn.Singleton):
    def set_api_wrapper(self, api_wrapper):
        self.api_wrapper = api_wrapper

    def set_socket_client(self, socket_client):
        self.socket_client = socket_client

    def __init__(self):
        self.socket_client = None
        self.api_wrapper = None

    def set_client(self, client):
        self.socket_client = client

    def on_text_from_client(self, message):
        json_data = {"mime_type": "text/plain", "body": message}
        self.on_json_from_client(json_data)

    def on_json_from_client(self, message_json):
        logger.log("Client: {}".format(message_json))
        self.socket_client.send(message_json)

    def on_json_from_server(self, message_json):
        logger.log("Server {} ".format(message_json))
        self.api_wrapper.send_to_client(message_json)