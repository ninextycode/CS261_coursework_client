var port = 5000
var address = 'http://localhost'
var url = address + ':' + port
var notification_period_ms = 10000
var audio_mime = 'audio/flac';
var text_mime = 'text/plain';

$('#send_button').click(onSendButtonPressed);
function onSendButtonPressed(){
    message = $('#message_area').val();
    on_my_message(message);
    send_to_server({mime_type: text_mime, content: message});
}

message_style = '\'background: GreenYellow;\'';
function on_message(message) {
    message_div = $('<div style='+message_style+' class=\"row message\"></div>').text(message);
    $('#responses').prepend(message_div);
}

my_message_style = '\'background: #cce6ff;\'';
function on_my_message(message) {
    message_div = $('<div style='+my_message_style+' class=\"row message\"></div>').text(message);
    $('#responses').prepend(message_div);
}


exception_style = '\'background: red;\'';
function on_exception(message) {
    message_div = $('<div style='+exception_style+' class=\"row message\"></div>').text(message);
    $('#errors').prepend(message_div);
}

unknown_style = '\'background: yellow;\'';
function on_unknown_type(message) {
    message_div = $('<div style='+unknown_style+'class=\"row message\"></div>').text(JSON.stringify(message));
    $('#responses').prepend(message_div);
}


function on_response(response) {
    console.log('received ', response)
    if(response.type === 'response') {
        on_message(response.data.body.headline)
        on_message(response.data.body.text_body)
    } else if(response.type === 'exception') {
        on_exception(response.data.body) }
    else if(response.type === 'lsit') {
        for (var i = 0; i < response.data.length; i++) {
            on_response(response.data[i]);
        }

    } else {
        on_unknown_type(response);
    }
}

function send_to_server(message) {
    message_json = {type: 'message', data: {body: message}};
    send_json(message_json);
}

function request_notifications() {
    message_json = {type: 'notifications_request'};
    send_json(message_json);
}

function on_ajax_fail(e) {
     on_exception('An error occured: ' + e.statusText + ' ' + e.status);
}

function send_json(message_json) {
    console.log('Sending ', message_json, ' to ', url);
    $.ajax({
        url: url,
        type: 'POST',
        data: JSON.stringify(message_json, null, '\t'),
        contentType: 'application/json;charset=UTF-8',
        error: on_ajax_fail,
        success: on_response
    });
}

function request_notifications_recurrent() {
    request_notifications()
    setTimeout(request_notifications_recurrent, notification_period_ms)
}

request_notifications_recurrent()