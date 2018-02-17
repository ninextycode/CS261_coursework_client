import wsaccel
import time
import ws4py.client.threadedclient as tc
import json
import threading

import frontend_wrapper.Log as l
import config


wsaccel.patch_ws4py()


class Ws4pyClient(tc.WebSocketClient):
    def __init__(self, url, message_callback, disconnect_callback=None,
                 protocols=('http-only', 'chat'), *args, **kwargs):
        super().__init__(url, protocols, *args, **kwargs)

        self.url = url
        self.message_callback = message_callback
        self.disconnect_callback = disconnect_callback
        self.daemon = True
        self.connected = False

    def is_connected(self):
        return self.connected

    def set_connected(self, val):
        self.connected = val

    def connect(self):
        l.log("Connecting to {}".format(self.url))
        try:
            super().connect()
            self.set_connected(True)
            return True
        except Exception as e:
            self.set_connected(False)
            l.log("Exception on connect: ", e)
            return False

    def opened(self):
        pass

    def closed(self, code, reason=None):
        l.log("Closed, code: {}, reason: {}".format(code, reason))

        self.set_connected(False)
        if self.disconnect_callback is not None:
            self.disconnect_callback(code, reason)

    def received_message(self, m):
        self.message_callback(m)


class SocketClient():
    requested_close_code = 1000
    instance = None
    main_lock = threading.Lock()
    wait_reconnect_s = 1

    @staticmethod
    def get_instance():
        if SocketClient.instance is None:
            with SocketClient.main_lock:
                if SocketClient.instance is None:
                    SocketClient.instance = SocketClient()
        return SocketClient.instance

    def __init__(self, url=config.server_url):
        self.reconnect_lock = threading.Lock()
        self.recreate_ws4py_lock = threading.Lock()
        self.close_lock = threading.Lock()
        self.sending_thread_lock = threading.Lock()
        self.send_queued_lock = threading.Lock()
        self.reset_connection_lock = threading.Lock()

        self.url = url

        self.messages_to_send = []

        self.stop_sending_thread_flag = False
        self.sending_thread = None

        self.ws4py_client = None

        self.new_sending_thread()
        self.new_ws4py_instance()

        self.bot_wrapper = None

    def set_bot_wrapper(self, bot_wrapper):
        self.bot_wrapper = bot_wrapper

    def new_sending_thread(self):
        with self.sending_thread_lock:
            self.unsafe_new_sending_thread()

    def unsafe_new_sending_thread(self):
        message_send_period_s = 0.1

        def always_send_queued():
            while True:
                if self.stop_sending_thread_flag:
                    return
                self.send_queued()
                time.sleep(message_send_period_s)

        self.sending_thread = threading.Thread(target=always_send_queued)
        self.sending_thread.daemon = True
        self.sending_thread.start()

    # client reconnects automatically by this function
    def on_disconnect(self, code, reason):
        if code !=SocketClient.requested_close_code:
            self.reset_connection()

    def reset_connection(self):
        with self.reset_connection_lock:
            self.new_ws4py_instance()
            self.try_connect_infinitely()
            self.new_sending_thread()

    def new_ws4py_instance(self):
        with self.recreate_ws4py_lock:
            self.unsafe_close()
            self.ws4py_client = Ws4pyClient(self.url, self.on_message, self.on_disconnect)

    def try_connect_infinitely(self):
        with self.reconnect_lock:
            if self.is_connected():
                return
            self.ws4py_client.connect()

        while not self.is_connected():
            l.log("Reconnect to {} in {} seconds".format(self.url, SocketClient.wait_reconnect_s))
            time.sleep(SocketClient.wait_reconnect_s)

            with self.reconnect_lock:
                self.ws4py_client.connect()

    def is_connected(self):
        return self.ws4py_client is not None and \
                self.ws4py_client.is_connected()

    def close(self):
        with self.close_lock:
            self.unsafe_close()

    def unsafe_close(self):
        # wait for messages to be sent
        while self.is_connected() and \
                len(self.messages_to_send) > 0:
            time.sleep(0.01)

        self.join_sending_thread()
        self.messages_to_send = []

        if self.is_connected():
            self.ws4py_client.close()

    def join_sending_thread(self):
        with self.sending_thread_lock:
            if self.sending_thread is not None and\
                     self.sending_thread.is_alive():
                self.stop_sending_thread_flag = True
                self.sending_thread.join()
                self.stop_sending_thread_flag = False

    def on_message(self, message):
        message_json = json.loads(message.data.decode("utf-8"))
        l.log("SocketClient received {} {}".format(type(message_json), message_json))
        self.bot_wrapper.on_json_from_server(message_json)

    def send(self, message):
        self.send_in_future(message)

    def send_in_future(self, message):
        # wait for reconnect
        with self.reset_connection_lock:
            if not self.is_connected():
                raise Exception("Connect client first")
            self.messages_to_send.append(message)

    def send_queued(self):
        with self.send_queued_lock:
            for m in self.messages_to_send:
                self.unsafe_send(m)
                l.log("SocketClient sent {} {}".format(type(m), m))
            self.messages_to_send = []

    def unsafe_send(self, message):
        if not self.is_connected():
            raise Exception("Connect client first")
        message_str = json.dumps(message)
        self.ws4py_client.send(message_str)
