var port = 5000
var address = 'http://localhost'
var url = address + ':' + port
var notification_period_ms = 10000
var audio_mime = 'audio/flac';
var text_mime = 'text/plain';
var debug = false;

var welcome_msg = "Hello, what can I help you today?";


$(document).ready(function() {
  var rotation = 0;
  $('#send_button').click(onSendButtonPressed);
  function onSendButtonPressed(){
      message = $('#message_area').val().trim();
      if(message != null && message != ''){
        $('#message_area').val('');
        if(audio_setup){
          $('#send_button').hide();
          $('#audio_button').show();
        }
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

  $( window ).resize(function() {
    $(".expandable").each(function(){
      $(this).next().css('width',$(this).css('width'));
    });
  });
  $(".news").click(function(e){
    if($(this).find('.hidden_news').css('display') == 'none'){
      $(this).find('.hidden_news').show();
      $(this).parent().find('.drop_down_arrow').addClass('rotate');
    }else{
      $(this).find('.hidden_news').hide();
      $(this).find('.summary').hide();
      $(this).parent().find('.drop_down_arrow').removeClass('rotate');
    }
  });

  $(".news .news_title, .news .summary,.news .summary a").click(function(e) {
        e.stopPropagation();
   });


   $(".news_title").click(function(e){
     var summary = $(this).next();
     if(summary.css('display') == 'none'){
       summary.show();
     }
   });
   $(".summary").click(function(e){
       $(this).hide();
   });

  $(".expandable").click(function(e){
    if($(this).next().css('display') == 'none'){
      $(this).next().slideDown();
      $(this).parent().find('.drop_down_arrow').addClass('rotate');
    }else{
      $(this).next().slideUp();
      $(this).parent().find('.drop_down_arrow').removeClass('rotate');
    }
  });
  $(".social_media_panel").click(function(e){
    $(this).slideUp();
    $(this).parent().find('.drop_down_arrow').removeClass('rotate');

  });

  $('.news_title, .news .drop_down_arrow').hover(function(){
    $(this).css('color','white');
  },
  function(){
    $(this).css('color','lightGray');
  });


  $('.news').hover(function(){
    $(this).css('background','#565656');
    $(this).find('.news_title').css('color','lightGray');
    $(this).find(".drop_down_arrow").css('color','lightGray');
  },
  function(){
    $(this).css('background','white');
    $(this).find('.news_title').css('color','#565656');
    $(this).find(".drop_down_arrow").css('color','#565656');
  });




  $("#message_area").keyup(function(){
    if(audio_setup){
      var val = message = $(this).val().trim();
      if(val != null && val != ""){
        $('#send_button').show();
        $('#audio_button').hide();
      }else{
        $('#send_button').hide();
        $('#audio_button').show();
      }
    }
  });
});

  function on_message(message) {
      var html = "<div class='message_wrapper'><div class='output message'>";
      html += message + "</div></div>";
      //$('#responses').append(html);
      $(html).insertBefore('#input_waiting');
      $('#responses').scrollTop($('#responses')[0].scrollHeight);


  }
  function on_my_message(message) {
      var html = "<div class='message_wrapper'><div class='input message'>";
      html += message + "</div></div>";
      $(html).insertBefore('#input_waiting');
      //$('#responses').append(html);
      $('#responses').scrollTop($('#responses')[0].scrollHeight);

  }

  function on_voicemessage(message){
      var html = "<div class='message_wrapper'><div class='input message'>";
      html += message + "</div></div>";
      $(html).insertBefore('#input_waiting');
      //$('#responses').append(html);
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


  //exception_style = '\'background: red;\'';
  function on_exception(message) {
    /*
      message_div = $('<div style='+exception_style+' class=\"row message\"></div>').text(message);
      $('#errors').prepend(message_div);
      */
      if(debug){
        message = "**ERROR**<br>"+(message);
        var html = "<div class='message_wrapper'><div class='output message'>";
        html += message + "</div></div>";
        $(html).insertBefore('#input_waiting');
        //$('#responses').append(html);
        $('#responses').scrollTop($('#responses')[0].scrollHeight);
      }else{
        console.log("**ERROR** "+message);
      }
  }

  //unknown_style = '\'background: yellow;\'';
  function on_unknown_type(message) {
    /*
      message_div = $('<div style='+unknown_style+'class=\"row message\"></div>').text(JSON.stringify(message));
      $('#responses').prepend(message_div);
      */
      console.log("**UNKNOWN TYPE**<br>"+JSON.stringify(message));
      message = "Sorry I don't understand. May be you could try to ask another question?";
      var html = "<div class='message_wrapper'><div class='output message'>";
      html += message + "</div></div>";
      $(html).insertBefore('#input_waiting');
      //$('#responses').append(html);
      $('#responses').scrollTop($('#responses')[0].scrollHeight);
  }


  function on_response(response) {
      console.log('received ', response);
      if(response.type === 'response') {
          if('raw_input' in response.additional_data.formal_request){
            on_voicemessage(response.additional_data.formal_request.raw_input);
            $('#input_waiting').hide();
            $('#output_waiting').show();
          }
          if(response.additional_data.formal_request.subtype == 'news'){
            //on_message(response.data.body.headline);
            generate_news(response.additional_data);
            //on_message(response.data.body.text_body);
          }else if(response.additional_data.formal_request.subtype == 'stock'){
            generate_stock(response.additional_data);
            //on_message(response.data.body.headline);
            //on_message(response.data.body.text_body);
          }else if(response.additional_data.formal_request.subtype == 'social_media'){
            generate_social_media(response.additional_data);;
          }
      } else if(response.type === 'exception') {
          on_exception(response.data.body);
      }else if(response.type === 'lsit') {
          for (var i = 0; i < response.data.length; i++) {
              on_response(response.data[i]);
          }
      } else {
          on_unknown_type(response);
      }
      $('#output_waiting').hide();
  }

  function generate_news(data){
    var news_data = data.unformatted_data;
    var keywords = data.formal_request.keywords;
    on_message("I have found "+news_data.length+" news articles about "+text_array(keywords)+". ");
    var html = "<div class='message_wrapper'>";
    html += "<div class='output message news'>";
    news_data.forEach(function(news,i){
      if(i<3){
          html+="<div class='news_title'>";
      }else if(i==3){
        html+="<div class='hidden_news news_title'>";
      }else{
        html+="<div class='hidden_news news_title'>";
      }
      html += (i+1)+". " +news.title+ '</div>';
      html += "<div class='summary'>";
      html += "<p class='summary_title'><a target='_blank' href='"+news.link+"' >"+news.title+"</a><br><br>Summary</p>";
      html+=news.summary.replace("\n","<br>").replace("(Summary created with sumy 0.7.0 library)","")+"</div>";
    });
    if(news_data.length>3){
      html += "<div><div class='drop_down_arrow'><i class='fas fa-angle-down'></i></div></div>";
    }
    html +=  "</div></div>";
    $(html).insertBefore('#input_waiting');
    //$('#responses').append(html);
    console.log($('#responses')[0].scrollHeight);
    $('#responses').scrollTop($('#responses')[0].scrollHeight);
  }

  function generate_social_media(data){
    var html = "<div class='message_wrapper'><div class='output message expandable'>";
    var keywords = data.formal_request.keywords;
    html += 'The general opinion is '+data.unformatted_data.general_opinion+' towards '+ text_array(keywords);
    html += "<div class='drop_down_arrow'><i class='fas fa-angle-down'></i></div>";
    html += "</div><div class='message output social_media_panel'>";
    html += "I have analysed "+text_array(keywords)+" with 100 social media posts. ";
    html += "Here is what I have found. <br><br>";
    html += "Very positive: "+data.unformatted_data.very_positive+"%<br>";
    html += "Positive: "+data.unformatted_data.positive+"%<br>";
    html += "Neutral: "+data.unformatted_data.neutral+"%<br>";
    html += "Negative: "+data.unformatted_data.negative+"%<br>";
    html += "Very negative: "+data.unformatted_data.very_negative+"%<br>";
    html += "The average sentiment score is "+parseFloat(data.unformatted_data.mean).toFixed(2)+".";
    html += "</div></div>";

    $(html).insertBefore('#input_waiting');
    //$('#responses').append(html);
    $('#input_waiting').prev().find('.social_media_panel').css('width',$('#input_waiting').prev().find('.expandable').css('width'));
    console.log($('#responses')[0].scrollHeight);
    $('#responses').scrollTop($('#responses')[0].scrollHeight);
  }

  function text_array(arr){
    if(arr.length == 0){
      return '';
    }if(arr.length == 1){
      return arr[0];
    }else{
      var text = arr[0];
      for(var i=1; i<arr.length-1; i++){
        text += ', '+arr[i];
      }
      text += ' and '+arr[arr.length-1];
      return text;
    }
  }

  function generate_stock(data){
    var indicators = data.formal_request.indicators;
    var companies = data.formal_request.tickers;
    indicators.forEach(function(indicator){
      if(indicator == "just_price" || indicator == "price_change" || indicator == "stock_variance"){
        var arr = [];
        companies.forEach(function(company){
          arr.push(data.unformatted_data[indicator][company]);
        });
        if(indicator == "just_price"){
            arr.forEach(function(price, i){
              arr[i] = price +" GBX"
            });
            on_message('The price'+((companies.length>1)?'s':'')+' of '+text_array(companies)+((companies.length>1)?' are ':' is ')+text_array(arr)+'.');
        }else if(indicator == "price_change"){
          if(arr.length == 1){
            var msg = 'The price of '+companies[0];
            var change = parseFloat(arr[0]);
            if(change == 0){
              msg += " remains unchanged";
            }else if(change > 0){
              msg += " increases by "+change+" GBX.";
            }else{
              msg += " decreases by "+change+" GBX.";
            }
            on_message(msg);
          }else{
            //FROM DATE
            var msg = 'The price changes of '+text_array(companies)+((companies.length>1)?' are ':' is ');
            arr.forEach(function(change, i){
              if(parseFloat(change)>0){
                arr[i] = "+"+change;
              }
              arr[i] = arr[i] +" GBX"
            });
            msg += text_array(arr)+'.';
            on_message(msg);
          }
        }else if(indicator == "stock_variance"){

        }
      }else if(indicator == "industry_average"){

      }
    });

  }

  function send_to_server(message, isAudio = false) {
      if(isAudio){
        $('#input_waiting').show();
      }else{
        $('#output_waiting').show();
      }
      $('#responses').scrollTop($('#responses')[0].scrollHeight);
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
  on_message(welcome_msg);

  //on_response(json1);
  //on_response(json2);
  //on_response(json3);
  //on_response(json4);
  /*
  on_response(json1);
  on_response(json2);
  on_response(json3);
  on_response(json1);
  on_response(json2);
  on_response(json3);
  on_response(json1);
  on_response(json2);
  on_response(json3);
  */
  $('#responses').scrollTop($('#responses')[0].scrollHeight);
