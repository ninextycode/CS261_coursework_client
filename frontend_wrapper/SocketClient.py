import wsaccel
import time
import frontend_wrapper.Log as l
import config
import ws4py.client.threadedclient as tc

wsaccel.patch_ws4py()


class Ws4pyClient(tc.WebSocketClient):
    def __init__(self, url, message_callback, close_callback,
                 protocols=['http-only', 'chat'], *args, **kwargs):
        self.url = url
        self.message_callback = message_callback
        self.close_callback = close_callback
        super().__init__(url, protocols, *args, **kwargs)
        self.daemon = True
        self.connected = False

    def is_connected(self):
        return self.connected

    wait_reconnect = 5

    def try_connect_infinitely(self):
        while not self.connect():
            l.log("Reconnect to {} in {} seconds".format(self.url, Ws4pyClient.wait_reconnect))
            time.sleep(Ws4pyClient.wait_reconnect)

    def connect(self):
        l.log("Connecting to {}".format(self.url))
        try:
            super().connect()
            is_connected = True
            return True
        except Exception as e:
            l.log("Exception on connect: ", e)
            return False

    def opened(self):
        pass

    def closed(self, code, reason=None):
        self.close_callback()
        is_connected = False

    def received_message(self, m):
        self.message_callback(m)


class SocketClient():
    instance = None

    def __init__(self, url=config.server_url):
        self.url = url
        self.ws4py_client = Ws4pyClient(url, self.on_message, self.on_close)
        self.ws4py_client.try_connect_infinitely()

    def on_close(self):
        self.ws4py_client = Ws4pyClient(self.url, self.on_message, self.on_close)
        self.ws4py_client.try_connect_infinitely()

    def close(self):
        if self.ws4py_client.is_connected():
            self.ws4py_client.close()

    def on_message(self, message):
        l.log("I received {}".format(message))

    @staticmethod
    def get_instance():
        if SocketClient.instance is None:
            SocketClient.instance = SocketClient()
        return SocketClient.instance
