var port = 5000
var address = 'http://localhost'
var url = address + ':' + port
var notification_period_ms = 10000
var audio_mime = 'audio/flac';
var text_mime = 'text/plain';

$( document ).ready(function() {
  $('#responses').scrollTop($('#responses')[0].scrollHeight);
  $('#send_button').click(onSendButtonPressed);
  function onSendButtonPressed(){
      message = $('#message_area').val().trim();
      if(message != null && message != ''){
        $('#message_area').val('');
        $('#send_button').hide();
        $('#audio_button').show();
        $("#message_area").prop('rows',1);
        on_my_message(message.replace("\n", "<br>"));
        send_to_server({mime_type: text_mime, content: message});
      }
  }


  $("#message_area").keydown(function(e){
    // Enter was pressed without shift key
    if (e.keyCode == 13){
      if(!e.shiftKey){
        e.preventDefault();
        onSendButtonPressed();
      }else{
        if($("#message_area").prop('rows')<5){
          $("#message_area").prop('rows',$("#message_area").prop('rows')+1);
        }
      }
    }
  });
  $("#message_area").keyup(function(){
    var val = message = $(this).val().trim();
    console.log(val);
    if(val != null && val != ""){
      $('#send_button').show();
      $('#audio_button').hide();
    }else{
      $('#send_button').hide();
      $('#audio_button').show();
    }
  });

  function on_message(message) {
      var html = "<div class='message_wrapper'><div class='output message'>";
      html += message + "</div></div>";
      $('#responses').append(html);
      $('#responses').scrollTop($('#responses')[0].scrollHeight);


  }
  function on_my_message(message) {
      var html = "<div class='message_wrapper'><div class='input message'>";
      html += message + "</div></div>";
      $('#responses').append(html);
      $('#responses').scrollTop($('#responses')[0].scrollHeight);

  }


  /*
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
  */


  exception_style = '\'background: red;\'';
  function on_exception(message) {
    /*
      message_div = $('<div style='+exception_style+' class=\"row message\"></div>').text(message);
      $('#errors').prepend(message_div);
      */
  }

  unknown_style = '\'background: yellow;\'';
  function on_unknown_type(message) {
    /*
      message_div = $('<div style='+unknown_style+'class=\"row message\"></div>').text(JSON.stringify(message));
      $('#responses').prepend(message_div);
      */
  }


  function on_response(response) {
      console.log('received ', response);
      if(response.type === 'response') {
            on_message(response.data.body.headline);
            on_message(response.data.body.text_body);

      } else if(response.type === 'exception') {
          on_exception(response.data.body);
      }else if(response.type === 'lsit') {
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
      request_notifications();
      setTimeout(request_notifications_recurrent, notification_period_ms);
  }

  /*
  function scrollDownMessage(){
      var scrollHeight = $("#responses").prop("scrollHeight");
      window.scrollTo(0,scrollHeight);
  }
  */
  request_notifications_recurrent();
});
