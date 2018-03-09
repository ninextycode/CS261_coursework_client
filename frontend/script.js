var port = 5000
var address = 'http://localhost'
var url = address + ':' + port
var notification_period_ms = 10000
var audio_mime = 'audio/flac';
var text_mime = 'text/plain';
var debug = false;

var welcome_msg = "Hello, what can I help you today?";

var json6 = {
 "additional_data": {
   "formal_request": {
     "indicators": [
       "price_change"
     ],
     "raw_input": "what does a change of price of Tesco in Black Lace this month",
     "subtype": "stock",
     "tickers": [
       "TSCO"
     ],
     "time": ["2002-12-25 00:00:00", "2002-12-25 01:00:00"],
     "time_period": "[datetime.datetime(2018, 3, 7, 0, 0), datetime.datetime(2018, 3, 7, 16, 46)]",
     "type": "data_request"
   },
   "unformatted_data": {
     "price_change": {
       "TSCO": "32.894",
       "average": "32.894"
     }
   }
 },
 "data": {
   "body": {
     "headline": "The value of ['price_change']:\n",
     "text_body": "TSCO: 32.8943\naverage: 32.8943\n\n\n"
   },
   "mime_type": "text/plain"
 },
 "type": "response"
};
/*
var json3 = {
 "additional_data": {
   "formal_request": {
     "keywords": [
       "tesco"
     ],
     "subtype": "social_media",
     "type": "data_request"
   },
   "unformatted_data": {
     "general_opinion": "neutral",
     "histrogram_string": "-0.889:  2 ==\n-0.667:  5 =====\n-0.444:  5 =====\n-0.222: 23 =======================\n-0.000: 46 ==============================================\n 0.222: 11 ===========\n 0.444:  8 ========\n 0.667:  0 \n 0.889:  0 ",
     "mean": -0.0590000007301569,
     "negative": "26",
     "neutral": "46",
     "positive": "13",
     "total": 100,
     "very_negative": "9",
     "very_positive": "6"
   }
 },
 "data": {
   "body": {
     "headline": "Social Media Analysis for ['tesco']",
     "text_body": "The overall sentiment of 100 social media posts is neutral with an average sentiment score of -0.06.\nVery positive:\t6.0%\nPositive:\t\t13.0% \nNeutral:\t\t46.0% \nNegative:\t\t26.0% \nVery negative:\t9.0%"
   },
   "mime_type": "text/plain"
 },
 "type": "response"
};

var json4 = {
 "additional_data": {
   "formal_request": {
     "indicators": [
       "just_price"
     ],
     "raw_input": "what does a change of price of Tesco in Black Lace this month",
     "subtype": "stock",
     "tickers": [
       "TSCO","ALDI"
     ],
     "time": "[datetime.datetime(2018, 3, 1, 0, 0), datetime.datetime(2018, 3, 7, 16, 46)]",
     "time_period": "[datetime.datetime(2018, 3, 7, 0, 0), datetime.datetime(2018, 3, 7, 16, 46)]",
     "type": "data_request"
   },
   "unformatted_data": {
     "just_price": {
       "TSCO": "32.894",
       "ALDI": "12.21",
       "average": "32.894"
     }
   }
 },
 "data": {
   "body": {
     "headline": "The value of ['price_change']:\n",
     "text_body": "TSCO: 32.8943\naverage: 32.8943\n\n\n"
   },
   "mime_type": "text/plain"
 },
 "type": "response"
};
*/
var json4 ={
 "additional_data": {
   "formal_request": {
     "indicators": [
       "price_change"
     ],
     "raw_input": "what does a change of price of Tesco in Black Lace this month",
     "subtype": "stock",
     "tickers": [
       "TSCO"
     ],
     "time": ["2002-12-25 00:00:00", "2002-12-25 01:00:00"],
     "time_period": "[datetime.datetime(2018, 3, 7, 0, 0), datetime.datetime(2018, 3, 7, 16, 46)]",
     "type": "data_request"
   },
   "unformatted_data": {
     "price_change": {
       "TSCO": "32.894",
       "average": "32.894"
     }
   }
 },
 "data": {
   "body": "The price of tesco did not change in the past hours",
   "time": ["2002-12-25 00:00:00", "2002-12-25 01:00:00"],
   "time_period": "[datetime.datetime(2018, 3, 7, 0, 0), datetime.datetime(2018, 3, 7, 16, 46)]",
   "type": "data_request"
 },
 "type": "notification"
};
var json7 ={
 "additional_data": {
   "formal_request": {
     "indicators": [
       "price_change"
     ],
     "raw_input": "what does a change of price of Tesco in Black Lace this month",
     "subtype": "stock",
     "tickers": [
       "TSCO"
     ],
     "time": ["2002-12-25 00:00:00", "2002-12-25 01:00:00"],
     "time_period": "[datetime.datetime(2018, 3, 7, 0, 0), datetime.datetime(2018, 3, 7, 16, 46)]",
     "type": "data_request"
   },
   "unformatted_data": {
     "price_change": {
       "TSCO": "32.894",
       "average": "32.894"
     }
   }
 },
 "data": {
   "body": "2",
   "time": ["2002-12-25 00:00:00", "2002-12-25 01:00:00"],
   "time_period": "[datetime.datetime(2018, 3, 7, 0, 0), datetime.datetime(2018, 3, 7, 16, 46)]",
   "type": "data_request"
 },
 "type": "notification"
};
var json9 ={
 "additional_data": {
   "formal_request": {
     "indicators": [
       "price_change"
     ],
     "raw_input": "what does a change of price of Tesco in Black Lace this month",
     "subtype": "stock",
     "tickers": [
       "TSCO"
     ],
     "time": ["2002-12-25 00:00:00", "2002-12-25 01:00:00"],
     "time_period": "[datetime.datetime(2018, 3, 7, 0, 0), datetime.datetime(2018, 3, 7, 16, 46)]",
     "type": "data_request"
   },
   "unformatted_data": {
     "price_change": {
       "TSCO": "32.894",
       "average": "32.894"
     }
   }
 },
 "data": {
   "body": "3",
   "time": ["2002-12-25 00:00:00", "2002-12-25 01:00:00"],
   "time_period": "[datetime.datetime(2018, 3, 7, 0, 0), datetime.datetime(2018, 3, 7, 16, 46)]",
   "type": "data_request"
 },
 "type": "notification"
};
var json2 = {
 "additional_data": {
   "formal_request": {
     "indicators": [
       "industry_average"
     ],
     "industry": 3,
     "raw_input": "how is the automobile industry performing?",
     "subtype": "industry",
     "tickers": [
       "GKN"
     ],
     "time": "[datetime.datetime(2018, 3, 8, 0, 0), datetime.datetime(2018, 3, 8, 18, 19)]",
     "time_period": "[datetime.datetime(2018, 3, 8, 0, 0), datetime.datetime(2018, 3, 8, 18, 19)]",
     "type": "data_request"
   },
   "unformatted_data": {
     "industry_average": {
       "average": "238.069"
     }
   }
 },
 "data": {
   "body": {
     "headline": "The value of [‘industry_average’]:\n",
     "text_body": "average: 238.0689\n\n\n"
   },
   "mime_type": "text/plain"
 },
 "type": "response"
};

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

    $(".messages").on('click', '.news',function(e){
    if($(this).find('.hidden_news').css('display') == 'none'){
      $(this).find('.hidden_news').show();
      $(this).parent().find('.drop_down_arrow').addClass('rotate');
    }else{
      $(this).find('.hidden_news').hide();
      $(this).find('.summary').hide();
      $(this).parent().find('.drop_down_arrow').removeClass('rotate');
    }
    });
        $('.header, .notify, .notifications').click(function(){
        $('.notifications').toggleClass('slide');
        if($('.notify').hasClass('unread')){
        $('.notify').toggleClass('unread');
    }
    });


    $(".notifications").on('click', '.notification',function(e){
      $(this).remove();
      e.stopPropagation();
    });


    $(".messages").on('click', '.news .news_title, .news .summary,.news .summary a',function(e){
        e.stopPropagation();
    });



    $(".messages").on('click', '.news_title',function(e){
        var summary = $(this).next();
        if(summary.css('display') == 'none'){
            summary.show();
        }
    });


   $(".messages").on('click', '.summary',function(e){
      $(this).hide();
   });

   $(".messages").on('click', '.expandable',function(e){
     if($(this).next().css('display') == 'none'){
       $(this).next().slideDown();
       $(this).parent().find('.drop_down_arrow').addClass('rotate');
     }else{
       $(this).next().slideUp();
       $(this).parent().find('.drop_down_arrow').removeClass('rotate');
     }
   });

   $(".messages").on('click', '.social_media_panel',function(e){
     $(this).slideUp();
     $(this).parent().find('.drop_down_arrow').removeClass('rotate');
   });

/*
   $(".messages").on('hover', '.news_title, .news .drop_down_arrow',function(){
     $(this).css('color','white');
   },
   function(){
     $(this).css('color','lightGray');
   });

*/


  $(".messages").on('mouseenter', '.news_title, .news .drop_down_arrow',function(){
      $(this).css('color','white');
  });
  $(".messages").on('mouseleave', '.news_title, .news .drop_down_arrow',function(){
    $(this).css('color','lightGray');
  });

  /*
  $(".messages").on('hover', '.news',function(){
    $(this).css('background','#565656');
    $(this).find('.news_title').css('color','lightGray');
    $(this).find(".drop_down_arrow").css('color','lightGray');
  },
  function(){
    $(this).css('background','white');
    $(this).find('.news_title').css('color','#565656');
    $(this).find(".drop_down_arrow").css('color','#565656');
  });
  */
  $(".messages").on('mouseenter', '.news',function(){
    $(this).css('background','#565656');
    $(this).find('.news_title').css('color','lightGray');
    $(this).find(".drop_down_arrow").css('color','lightGray');
  });
  $(".messages").on('mouseleave', '.news',function(){
    $(this).css('background','#565656');
    $(this).find('.news_title').css('color','lightGray');
    $(this).find(".drop_down_arrow").css('color','lightGray');
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
          on_notification(message);
        }else{
          on_notification("There's an error in me.");
          console.log("**ERROR** "+message);
        }
        //var html = "<div class='message_wrapper'><div class='output message'>There's an error in me.</div></div>";
        //$(html).insertBefore('#input_waiting');
        //$('#responses').append(html);
        $('#responses').scrollTop($('#responses')[0].scrollHeight);

      //}
  }

  //unknown_style = '\'background: yellow;\'';
  function on_unknown_type(message) {
    /*
      message_div = $('<div style='+unknown_style+'class=\"row message\"></div>').text(JSON.stringify(message));
      $('#responses').prepend(message_div);
      */
      console.log("**UNKNOWN TYPE**<br>"+JSON.stringify(message));
      message = "Sorry I don't understand. May be you could ask another question?";
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
            //if('text' in response.additional_data.formal_request.raw_input){
              on_voicemessage(response.additional_data.formal_request.raw_input);
              $('#input_waiting').hide();
              $('#output_waiting').show();
            //}
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
          }else if(response.additional_data.formal_request.subtype == 'industry'){
            generate_industry(response.additional_data);
          }
      } else if(response.type === 'notification') {
            on_notification(response.data.body);
      } else if(response.type === 'exception') {
          on_exception(response.data.body);
      }else if(response.type === 'list') {
          for (var i = 0; i < response.data.length; i++) {
              on_response(response.data[i]);
          }
      } else {
          on_unknown_type(response);
      }
      $('#output_waiting').hide();
  }

  function on_notification(msg){
    if(!($('.notifications').hasClass('slide'))){
      $('.notify').addClass('unread');
    }
    var html = "<div class='message notification'>"+msg+"</div>";
    $('.notifications').append(html);
    $('.notifications').scrollTop($('.notifications')[0].scrollHeight);
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

  function format_date(date){
    return date.replace("T"," ").slice(0,16);
  }

function generate_stock(data){
    var indicators = data.formal_request.indicators;
    var companies = data.formal_request.tickers;
    indicators.forEach(function(indicator){
        if(indicator == "price" || indicator == "price_change" ){
            var arr = [];
            if(data.unformatted_data[indicator]){
                companies.forEach(function(company){
                    arr.push(data.unformatted_data[indicator][company]);
                });
                if(indicator == "price"){
                    arr.forEach(function(price, i){
                        arr[i] = price +" GBX"
                    });
                    on_message('The price'+((companies.length>1)?'s':'')+' of '+text_array(companies)
                        +((companies.length>1)?' are ':' is ')+text_array(arr)+'.');

                }else if(indicator == "price_change"){
                    //var arr = JSON.parse(data.formal_request.time);
                    var from = format_date(data.formal_request.time[0]);
                    var to = format_date(data.formal_request.time[1]);
                    if(arr.length == 1){
                        var msg = 'The price of '+companies[0];
                        var change = (parseFloat(arr[0])*100).toFixed(2);
                        if(change == 0){
                            msg += " remains unchanged";
                        }else if(change > 0){
                            msg += " increases by "+change+"%";
                        }else{
                            msg += " decreases by "+change+"%";
                        }
                        msg += " from "+from+" to "+to+". ";
                        on_message(msg);
                    }else{
                        //FROM DATE
                        var msg = 'The price changes of '+text_array(companies)+((companies.length>1)?' are ':' is ');
                        arr.forEach(function(change, i){
                            var val = (change*100).toFixed(2);
                            if(parseFloat(val)>0){
                                arr[i] = "+"+val+"%";
                            }else{
                                arr[i] = val +"%"
                            }
                        });
                        msg += text_array(arr)+" from "+from+" to "+to+". ";
                        on_message(msg);
                    }
                }
            }else{
                on_message("Sorry I cannot get the data for it.");
            }
        }
    });
}

function generate_industry(data){
    var indicators = data.formal_request.indicators;
    var companies = data.formal_request.tickers;
    indicators.forEach(function(indicator){
        if(indicator == "industry_average" || indicator == "price_change"){
            var main_msg = '';
            var sub_msg = [];
            var arr = [];
            if(indicator == "industry_average") {
                main_msg = 'The average price of this industry is ';
                main_msg += (data.unformatted_data.industry_average.average) + " GBX.";
                companies.forEach(function(company){
                    var val = data.unformatted_data[indicator][company];
                    if (typeof val != 'undefined'){
                        var msg = "The price of "+company+" is "+data.unformatted_data[indicator][company]+" GBX. ";
                        sub_msg.push(msg);
                    }
                });

            }else if(indicator == "price_change"){
                var from = format_date(data.formal_request.time[0]);
                var to = format_date(data.formal_request.time[1]);
                main_msg = 'The price change of this industry from '+from+' to '
                    +to+' is '+(data.unformatted_data.price_change.average*100).toFixed(2)+"%. ";
                companies.forEach(function(company){
                    var change = (data.unformatted_data[indicator][company]*100).toFixed(2);
                    if(!isNaN(change)){
                        var msg = "The price change of "+company+" is "+change+"%. ";
                        sub_msg.push(msg);
                    }
                });
            }

            var html = "<div class='message_wrapper'><div class='output message expandable'>";
            html += main_msg;
            html += "<div class='drop_down_arrow'><i class='fas fa-angle-down'></i></div>";
            html += "</div><div class='message output social_media_panel'>";
            html += "There "+(companies.length>1?"are":"is")+" "+companies.length+" "+(companies.length>1?"companies":"company")+" in this sector.";
            html += "Below is the details of each individual company. <br><br>";
            sub_msg.forEach(function(msg){
                html += msg +"<br>";
            });
            html += "</div></div>";

            $(html).insertBefore('#input_waiting');
            //$('#responses').append(html);
            $('#input_waiting').prev().find('.social_media_panel').css('width',$('#input_waiting').prev().find('.expandable').css('width'));
            console.log($('#responses')[0].scrollHeight);
            $('#responses').scrollTop($('#responses')[0].scrollHeight);
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
  //on_response(json6);
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
