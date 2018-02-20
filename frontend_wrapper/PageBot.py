import random

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

text_examples = open("long_test_text.txt").readlines()


@app.route("/")
def general_route():
    n = random.randint(1, 3)
    response = " ".join(random.sample(text_examples, n))
    response_json = {"type": "message", "data": response}
    return jsonify(response_json)


if __name__ == "__main__":
    app.run()