//global variable for script.js
audio_setup = false;

var  stream;
var  recorder;
var  chunks;
var  audioOptions =  {
    tag: 'audio',
    type: 'audio/ogg',
    ext: '.ogg'
};
/*
var start_audio_text = 'Record'
var stop_audio_text = 'Stop'

audio_button.text(start_audio_text);
*/
var audio_button = $('#audio_button');
var recording = false;
$( document ).ready(function() {
  function setup_audio_recording() {
      navigator.mediaDevices.getUserMedia({audio: true}).then(_stream => {
          stream = _stream;
          recorder = new MediaRecorder(stream);
          recorder.ondataavailable = e => {
              chunks.push(e.data);
              if(recorder.state == 'inactive')  make_blob();
          };
          audio_setup = true;
          $('#send_button').hide();
          $('#audio_icon').show();
          audio_button.on("click",on_audio_click);
          $(document).on("keydown",on_spacebar_press);
          console.log('got media successfully');
      },
      _reason => {
          //audio_button.prop('disabled', true);
          alert('Cannot get audio. Reason: ' + _reason);

      });
  }

  setup_audio_recording()

  function on_audio_click() {
      if(!recording) {
          start_recording();
      } else {
          stop_recording();
      }

  }
  function on_spacebar_press(e) {
    if ($(e.target).is('#message_area')) {
       return
    } else if (e.keyCode == 32) {
        on_audio_click();
        return false;
    }
  }


  function start_recording() {
      if(!audio_setup) {
          //audio_button.prop('disabled', true);
          //audio_button.text('Problems recording audio');
          return
      }
      //audio_button.text(stop_audio_text);
      recording = !recording;
      audio_button.addClass("recording");
      audio_button.removeClass("hover");
      chunks=[];
      recorder.start();
  }

  function stop_recording() {
      //audio_button.text(start_audio_text);
      recording = !recording;
      audio_button.removeClass("recording");
      audio_button.addClass("hover");
      recorder.stop();
  }

  function to_base64(u8) {
      return btoa(String.fromCharCode.apply(null, u8));
  }

  function from_base64(str) {
      return atob(str).split('').map(function (c) { return c.charCodeAt(0); });
  }

  function make_blob(){
      blob = new Blob(chunks, {type: audioOptions.type });

      arrayBuffer = null;
      uint8Array = null;
      fileReader = new FileReader();
      fileReader.onload = function() {
          arrayBuffer = this.result;
          uint8Array  = new Uint8Array(arrayBuffer);

          send_to_server({
              mime_type: audioOptions.type,
              is_base64: true,
              content: to_base64(uint8Array),
          });
      };
      fileReader.readAsArrayBuffer(blob);

  }
});
