# client
FROM ubuntu:17.10

RUN apt-get update
RUN apt-get install python3-pip -y

WORKDIR /client
COPY ./requirements.txt /client/requirements.txt
RUN pip3 install -r requirements.txt

COPY . /client

# CMD [ 'python3', 'main.py' ]
ENTRYPOINT [ "/bin/bash" ]