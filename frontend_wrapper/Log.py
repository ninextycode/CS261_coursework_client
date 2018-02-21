import datetime


class Logger:
    def __init__(self, prefix):
        self.prefix = prefix

    def log(self, *message):
        print(datetime.datetime.now(), self.prefix, "\t", *message)
