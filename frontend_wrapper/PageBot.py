import random

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

text_examples = open("long_test_text.txt").readlines()


@app.route("/")
def general_route():
    request_type = request.args.get("type", "none")
    print("Received: {}".format(request.args.get("data", "")))

    if request_type == "message":
        return on_message()
    elif request_type == "notifications_request":
        return on_not_request()
    else:
        return jsonify({})


def on_message():
    n = random.randint(1, 3)
    response = " ".join(random.sample(text_examples, n))
    response_json = {"type": "message", "data": response}
    return jsonify(response_json)


def on_not_request():
    response_json = {"type": "message", "data": "!!!!! I NOTIFY YOU THAT THERE IS NO NOTIFICATIONS !!!!!"}
    return jsonify(response_json)


if __name__ == "__main__":
    app.run()