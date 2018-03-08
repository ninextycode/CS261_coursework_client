var port = 5000
var address = 'http://localhost'
var url = address + ':' + port
var notification_period_ms = 10000
var audio_mime = 'audio/flac';
var text_mime = 'text/plain';
var debug = false;

var welcome_msg = "Hello, what can I help you today?";

var json1 = {"additional_data":{"formal_request":{"keywords":["trump"],"subtype":"news","type":"data_request"},"unformatted_data":[{"datetime":"2018-03-06T18:27:55","link":"https://www.npr.org/2018/03/05/591001865/ex-trump-campaign-aide-vows-to-fight-mueller-subpoena-in-tv-tirades","summary":"After initially saying he would not comply with a subpoena from Justice Department special counsel Robert Mueller, former Trump campaign aide Sam Nunberg appears to have changed his mind and is likely to cooperate.\nAfter initially saying he would not comply with a subpoena from Justice Department special counsel Robert Mueller, former Trump campaign aide Sam Nunberg appears to have changed his mind and is likely to cooperate.\nA former campaign aide to Donald Trump appears to have changed his mind and will not fight a subpoena he says he has received in the Russia investigation \u2014 after daring special counsel Robert Mueller to arrest him in multiple media appearances.\nSam Nunberg called reporters and TV news programs on Monday and said live that he’d gotten a grand jury subpoena as part of Mueller’s investigation asking for communications with other people in the Trump orbit \u2014 but that he would not comply.\nWhat followed was a rambling, at-times incoherent series of exchanges as Nunberg asked for legal advice, opined about whether Trump colluded with Russia, and relitigated an internal Trump campaign power struggle from 2015 \u2014 all live, on the air, in real time.\nNunberg also accused former Trump foreign policy adviser Carter Page of having played a role in the foreign attack on the election.\nAt the time, Nunberg’s firing was viewed as part of a broader struggle between Trump aides Corey Lewandowski and Roger Stone.\n (Summary created with sumy 0.7.0 library)","title":"Ex-Trump Aide Sam Nunberg Says He Is Likely To Cooperate With Mueller Subpoena"},{"datetime":"2018-03-06T17:02:05","link":"https://www.washingtonpost.com/news/the-fix/wp/2018/03/06/trumps-madman-approach-to-north-korea-is-getting-real-credit/","summary":"A man watches a TV screen in Seoul showing President Trump and North Korean leader Kim Jong Un.\nNorth Korea is now open to talks with the United States about scaling back its nuclear program, according to South Korean officials who met with their northern neighbors.\nNorth Korea did not confirm South Korea\u2019s version of events, saying simply that the two sides \u201cmade a satisfactory agreement\u201d during the meeting between the North\u2019s leader, Kim Jong Un, and envoys sent by the South\u2019s president, Moon Jae-in .\nBut some foreign policy experts say Trump has helped move the needle \u2014 however temporarily or tentatively \u2014 because of his \u201cmadman\u201d approach to North Korea and/or the sanctions spurred by the Trump administration’s efforts.\n\u201cI think North Korea\u2019s openness in the Olympics and summitry with South Korea, as well as potentially direct talks with the U.S., are the result of Trump’s approach.\u201d\nBefore the Olympics, Moon credited Trump with helping open the door to North Korean participation \u2014 and eventually a joint North Korea-South Korea women’s hockey team.\n\u201cCertainly, Trump should have introduced uncertainty and challenged North Korean assumptions about what they can expect and whether the U.S. will simply accept vulnerability to a North Korean nuclear threat,\u201d Snyder said.\n (Summary created with sumy 0.7.0 library)","title":"Trump’s ‘madman’ approach to North Korea is getting real credit"},{"datetime":"2018-03-06T15:47:09","link":"https://www.washingtonpost.com/news/politics/wp/2018/03/06/trump-made-a-lot-more-money-under-obama-than-under-trump/","summary":"In the year before he announced his presidential candidacy, Donald Trump added $1.3 billion to his net worth.\nThat\u2019s to hear Trump tell it, anyway; he claimed to have been worth $8.7 billion in June 2014 and, by the time he released his personal financial disclosure the following year, it was up to a neat $10 billion .\nOn Tuesday, Forbes released an updated estimate of President Trump\u2019s wealth: He\u2019s now worth $3.1 billion, Forbes figures , up from 2011, but down substantially from 2015.\nIt\u2019s close to the most recent estimate from Bloomberg News, which had Trump worth $2.9 billion in June.\nOnce Trump declared his presidential candidacy, his net worth began to fall.\nRevenues are also down in Scotland, where the president owns two golf clubs.\u201d\nForbes also estimated Trump\u2019s brand businesses \u2014 which Trump put at $3.3 billion in 2014 \u2014 at a measly $180 million.\n (Summary created with sumy 0.7.0 library)","title":"Trump made a lot more money under Obama than under Trump"},{"datetime":"2018-03-06T14:30:04","link":"https://www.vox.com/energy-and-environment/2018/3/6/17077330/trump-regulatory-agenda-omb","summary":"The OMB report reveals the core reason: Of all the regulations passed from 2006 to 2016, it is environmental regulations, specifically air pollution regulations, that had both the highest costs and the highest benefits.\nThe MATS rule, aimed at reducing toxic emissions from power plants, had between $33 billion and $90 billion in benefits (in 2007 dollars, for some reason), but it cost industry $9.6 billion.\nIn short, air quality rules secure enormous health benefits for the American public, but they also ask a great deal of industry.\nUpward redistribution is what unites GOP health care policy, tax policy, financial sector policy, and environmental policy.\nOkay, environmental regulations produce enormous health and social benefits, but don\u2019t they kill jobs?\nIf it doesn\u2019t think the costs to industry of reducing pollution are worth much larger benefits to public health, it can say so.\nThe OMB finds no evidence that federal regulations have any noticeable impact on aggregate national employment or economic growth.\n (Summary created with sumy 0.7.0 library)","title":"Trump White House quietly issues report vindicating Obama regulations"},{"datetime":"2018-03-06T14:29:00","link":"https://www.cnbc.com/2018/03/06/trump-there-are-people-in-the-white-house-that-i-want-to-change.html","summary":"President Trump pushes back against reports of \"chaos\" in the White House.\nTrump’s new tweet saying there are people in his administration he wants to change follows recent criticism of Attorney General Jeff Sessions and fears among Trump supporters that economic aide Gary Cohn may resign over tariffs.\nLast week, Trump’s longtime aide and confidant, White House communications director Hope Hicks, announced her resignation.\n (Summary created with sumy 0.7.0 library)","title":"Trump tweets: There are people in the White House ‘that I want to change’"},{"datetime":"2018-03-06T14:16:30","link":"https://www.washingtonpost.com/news/morning-mix/wp/2018/03/06/donald-j-trump-utah-national-parks-highway-meets-stormy-daniels-rampway/","summary":"Arch Canyon within Bears Ears National Monument in Utah.\nSome Republican lawmakers in Utah are so pleased with President Trump\u2019s decision to shrink two Utah national monuments that they want to honor him with his own road, the \u201cDonald J. Trump Utah National Parks Highway.\u201d\nThe proposal would put the Trump brand on the existing Utah National Parks Highway, 631 miles of scenic roads through southern Utah\u2019s stunningly beautiful canyons, a stretch that includes Zion National Park, Grand Staircase-Escalante National Monument, Glen Canyon National Recreation Area and Canyonlands National Park.\nRepublicans praised Trump for shrinking the Bears Ears and Grand Staircase-Escalante national monuments in December, opening them up for oil, gas and coal mining potential.\n\u201cI think it\u2019s a small price to pay to name a highway after him when he does in fact protect public lands.\u201d\nState Sen. Jim Dabakis (D) responded with his own renaming proposal: If the House passes the bill, then Dabakis threatened to attach an amendment in the Senate that would rename the frontage road that runs along the would-be Donald J. Trump Utah National Parks Highway.\nTrump stripped roughly 1.1 million acres from Bears Ears, reducing its protected area by 85 percent.\n (Summary created with sumy 0.7.0 library)","title":"‘Donald J. Trump Utah National Parks Highway’ meets ‘Stormy Daniels rampway’"},{"datetime":"2018-03-06T13:43:00","link":"https://www.cnn.com/2018/03/06/politics/trump-chaos-white-house-tweet/index.html","summary":"\"The new Fake News narrative is that there is CHAOS in the White House.\nPeople will always come & go, and I want strong dialogue before making a final decision,\" Trump tweeted.\nOver the weekend, White House chief economic adviser Gary Cohn was furious , one person familiar told CNN, and reportedly wanted to resign over Trump’s decision to impose steel and aluminum tariffs.\nAnd on Monday, former Trump ally Sam Nunberg told multiple reporters and television networks that he wouldn’t comply with the special counsel’s subpoena of his emails with former Trump aides.\nSome additional headlines from last week that fueled the latest reports of \"chaos\" include:\n\u2022 Trump confidante Hope Hicks’ resignation a day after admitting to a congressional panel that she told white lies for her boss.\n\u2022 Trump’s chief of staff John Kelly suggesting God had punished him by landing him in his job, while Anthony Scaramucci, the President’s short-lived communications director, saying White House morale was as bad as it’s ever been.\n (Summary created with sumy 0.7.0 library)","title":"Trump says there isn’t chaos in the White House, ‘only great energy’"},{"datetime":"2018-03-06T13:25:22","link":"https://www.washingtonpost.com/news/wonk/wp/2018/03/06/winners-and-losers-from-trumps-tariffs/","summary":"Every foreign company that sends steel and aluminum to the United States, including Canadian firms, would be forced to pay a 25 percent tariff on steel and a 10 percent tariff on aluminum.\nIf it backfires, Americans could face higher prices on everything from cars to microwaves, and the U.S. economy could sputter, hurting Republicans’ chances in the midterms and Trump’s in 2020.\nAs prices of aluminum and steel jump in the United States, it makes the prices of parts rise as well and that makes foreign parts look more appealing than American ones.\nA similar scenario played out after President George W. Bush’s 2002 tariffs on steel: 200,000 jobs were lost, according to research from the same consulting firm, which is more than the total number of people employed in the primary steel industry at the time.\nHistory also shows that past tariffs under George W. Bush and Obama resulted in net job losses.\nOnly 3 percent of U.S. steel imports originate in China, according to research firm Evercore ISI.\nUnited Steelworkers President Leo Gerard is Canadian and has been lobbying the White House extensively to exclude Canada and other countries that \u201cplay by the rules.\u201d The USW has a large Canadian membership.\n (Summary created with sumy 0.7.0 library)","title":"Winners and losers from Trump’s tariffs"},{"datetime":"2018-03-06T13:01:11","link":"https://www.cnbc.com/2018/03/06/trump-tariff-or-not-ron-paul-warns-a-calamity-will-hit-stocks.html","summary":"The situation facing stocks may appear more ominous with the addition of President Donald Trump’s tariff threat.\n\"If the Fed continues on the things that they are sort of planning on doing, it’s going to be a calamity,\" he said Monday on CNBC’s \" Trading Nation .\"\nHe says investors should not be shocked by a stock market plunge as deep as 50 percent.\n\"It’s going to be a calamity\" On \"Trading Nation\" last spring, he said a correction was \"inevitable\" despite a string of recent Nasdaq highs.\nThe broader market correction hit about 10 months later on Feb. 2.\nFor now, the markets seem to breathing a sigh of relief.The Dow rallied 336 points to close at 24,875 on Monday on the notion that Trump may back down from the steel and aluminum tariff threat.\nAccording to Paul’s latest prediction, the February pullback may be just a blip compared to what’s ahead.\n (Summary created with sumy 0.7.0 library)","title":"Ron Paul warns that market dangers are ‘bigger than ever,’ even if Trump backs away from tariff threat"},{"datetime":"2018-03-06T11:00:33","link":"https://www.theatlantic.com/politics/archive/2018/03/republicans-cant-stop-trumps-trade-war-tariffs/554903/","summary":"It\u2019s a major recurring theme of the Trump administration: The president threatens to betray a conservative principle, and Republicans in Congress try to talk him out of it.\nWhen Trump has veered left on immigration and told either Democratic leaders or bipartisan groups of lawmakers that he\u2019d back a simple deal to give the so-called Dreamers a path to citizenship, conservatives on Capitol Hill\u2014along with hardliners like Stephen Miller in the White House\u2014have persuaded him to back off and insist on a tougher stance instead.\nAfter the president flirted last week with strict gun-control policies, National Rifle Association lobbyists swooped in to set him straight , and GOP leaders backed them up by putting off quick votes on tighter gun restrictions.\nIn 1881, after California lawmakers imposed a special tax on railroad property, Southern Pacific pushed back, making the bold argument that the law was an act of unconstitutional discrimination under the Fourteenth Amendment.\nIt\u2019s a major recurring theme of the Trump administration: The president threatens to betray a conservative principle, and Republicans in Congress try to talk him out of it.\nWhen Trump has veered left on immigration and told either Democratic leaders or bipartisan groups of lawmakers that he\u2019d back a simple deal to give the so-called Dreamers a path to citizenship, conservatives on Capitol Hill\u2014along with hardliners like Stephen Miller in the White House\u2014have persuaded him to back off and insist on a tougher stance instead.\nAfter the president flirted last week with strict gun-control policies, National Rifle Association lobbyists swooped in to set him straight , and GOP leaders backed them up by putting off quick votes on tighter gun restrictions.\n (Summary created with sumy 0.7.0 library)","title":"Republicans Can’t Stop Trump’s Trade War"},{"datetime":"2018-03-06T10:43:04","link":"http://abcnews.go.com/US/flynn-selling-house-pay-legal-bills-trump-probe/story?id=53545172","summary":"\n (Summary created with sumy 0.7.0 library)","title":"Flynn selling house to pay legal bills in Trump probe"}]},"data":{"body":{"conclusion":"Find summaries and more news at localhost:7004/news.html","headline":"I found 20 recent articles for [‘trump’].\n","text_body":"Ex-Trump Aide Sam Nunberg Says He Is Likely To Cooperate With Mueller Subpoena: https://www.npr.org/2018/03/05/591001865/ex-trump-campaign-aide-vows-to-fight-mueller-subpoena-in-tv-tirades\nTrump’s ‘madman’ approach to North Korea is getting real credit: https://www.washingtonpost.com/news/the-fix/wp/2018/03/06/trumps-madman-approach-to-north-korea-is-getting-real-credit/\nTrump made a lot more money under Obama than under Trump: https://www.washingtonpost.com/news/politics/wp/2018/03/06/trump-made-a-lot-more-money-under-obama-than-under-trump/\nTrump White House quietly issues report vindicating Obama regulations: https://www.vox.com/energy-and-environment/2018/3/6/17077330/trump-regulatory-agenda-omb\nTrump tweets: There are people in the White House ‘that I want to change’: https://www.cnbc.com/2018/03/06/trump-there-are-people-in-the-white-house-that-i-want-to-change.html\n’Donald J. Trump Utah National Parks Highway’ meets ‘Stormy Daniels rampway’: https://www.washingtonpost.com/news/morning-mix/wp/2018/03/06/donald-j-trump-utah-national-parks-highway-meets-stormy-daniels-rampway/\nTrump says there isn’t chaos in the White House, ‘only great energy’: https://www.cnn.com/2018/03/06/politics/trump-chaos-white-house-tweet/index.html\nWinners and losers from Trump’s tariffs: https://www.washingtonpost.com/news/wonk/wp/2018/03/06/winners-and-losers-from-trumps-tariffs/\nRon Paul warns that market dangers are ‘bigger than ever,’ even if Trump backs away from tariff threat: https://www.cnbc.com/2018/03/06/trump-tariff-or-not-ron-paul-warns-a-calamity-will-hit-stocks.html\nRepublicans Can’t Stop Trump’s Trade War: https://www.theatlantic.com/politics/archive/2018/03/republicans-cant-stop-trumps-trade-war-tariffs/554903/\nFind summaries and more news at localhost:7004/news.html"},"mime_type":"text/plain"},"type":"response"};

var json2 = {
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
     "time": "[datetime.datetime(2018, 3, 1, 0, 0), datetime.datetime(2018, 3, 7, 16, 46)]",
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

  on_response(json1);
  on_response(json2);
  on_response(json3);
  on_response(json4);
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
