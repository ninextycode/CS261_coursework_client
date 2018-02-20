var port = 5000
var address = "http://localhost"
var url = address + ":" + port
var notification_period_ms = 10000


$("#send_button").click(onSendButtonPressed);
function onSendButtonPressed(){
    message = $('#message_area').val();
    send_to_server(message);
}



function on_message(message) {
    message_div = $("<div class=col style=\"border:solid\"></div>").text(message);
    $("#responses").append(message_div)
}

function on_response(response) {
    console.log("received ", response)
    if(response.type === "message") {
        on_message(response.data)
    }
}

function send_to_server(message) {
    message_json = {type: "message", data: message};
    send_json(message_json);
}

function request_notifications() {
    message_json = {type: "notifications_request"};
    send_json(message_json);
}

function send_json(message_json) {
    console.log("sending ", message_json, " to ", url);
    $.get(url, message_json, on_response)

}

function request_notifications_recurrent() {
    request_notifications()
    setTimeout(request_notifications_recurrent, notification_period_ms)
}

request_notifications_recurrent()