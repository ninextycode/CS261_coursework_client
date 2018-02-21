import frontend_wrapper.SocketClient as sc
import frontend_wrapper.PageBot as pb
import frontend_wrapper.BotWrapper as bw
import config
import time
import threading


def start():
    page_bot = pb.PageBot.get_instance()
    bot_wrapper = bw.BotWrapper.get_instance()
    socket_client = sc.SocketClient.get_instance()

    page_bot.set_bot_wrapper(bot_wrapper)

    bot_wrapper.set_api_wrapper(page_bot)
    bot_wrapper.set_socket_client(socket_client)

    socket_client.set_bot_wrapper(bot_wrapper)

    page_bot.start()
    socket_client.connect()


if __name__ == "__main__":
    try:
        start()
    except KeyboardInterrupt:
        print("Stopping client")