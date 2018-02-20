var port = 5000
var address = "http://localhost"
var url = address + ":" + port


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
    console.log("sending ", message_json, " to ", url);

    $.get(url, message_json, on_response)
}

function request_notifications() {
    $.get(url, {type: "notifications_request"}, on_response)
}
