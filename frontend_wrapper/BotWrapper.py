import frontend_wrapper.Log as l
import json

class BotWrapper:
    instance = None

    @staticmethod
    def get_instance():
        if BotWrapper.instance is None:
            BotWrapper.instance = BotWrapper()
        return BotWrapper.instance

    def __init__(self):
        self.socket_client = None
        self.api_wrapper = None

    def set_client(self, client):
        self.socket_client = client

    def send_text_to_server(self, message):
        json_data = {"mime_type": "text/plain", "data": message}
        self.send_json_to_server(json_data)

    def send_json_to_server(self, json):
        self.socket_client.send(json)

    def on_json_from_server(self, json):
        l.log("BotWrapper got {} {} from server".format(type(json), json))