import frontend_wrapper.SocketClient as sc
import config
import time


def start():
    client = None
    try:
        client = sc.SocketClient.get_instance()
    except KeyboardInterrupt:
        return

    try:
        while True:
            time.sleep(0.001)
    except KeyboardInterrupt:
        client.close()


start()