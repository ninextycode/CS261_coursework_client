import frontend_wrapper.SocketClient as sc
import frontend_wrapper.BotWrapper as bw
import config
import time
import threading

def start():
    client = None
    try:
        client = sc.SocketClient.get_instance()
        client.reset_connection()

        bot_wrapper = bw.BotWrapper.get_instance()
        client.set_bot_wrapper(bot_wrapper)
        bot_wrapper.set_client(client)

        while True:
            bot_wrapper.send_to_server({"mime_type": "application/json", "data": "{}"})
            time.sleep(0.5)
    except KeyboardInterrupt:
        client.close()


start()