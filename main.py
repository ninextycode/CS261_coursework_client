import frontend_wrapper.SocketClient as sc
import config
import time
import threading

def start():
    client = None
    try:
        client = sc.SocketClient.get_instance()
        client.reset_connection()
    except KeyboardInterrupt:
        return

    ts = []
    try:
        while True:
            client.close()
            client.reset_connection()
            ts = [threading.Thread(
                    target=lambda : client.send_in_future({"request":threading.current_thread().getName()}))
                    for i in range(10)]
            [t.start() for t in ts]
            [t.join() for t in ts]
            client.send_in_future({"request": "request body"})
            time.sleep(2)
    except KeyboardInterrupt:
        pass
    finally:
        [t.join() for t in ts]
        client.close()


start()