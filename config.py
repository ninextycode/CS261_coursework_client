import os

if "IS_IN_DOCKER" in os.environ.keys() and os.environ["IS_IN_DOCKER"]:
    server_address = "192.168.0.1"
else:
    server_address = "localhost"

print(server_address)

frontend_host = "0.0.0.0"
frontend_port = 5000

server_port = 7004

server_url = "ws://{}:{}".format(server_address, server_port)
