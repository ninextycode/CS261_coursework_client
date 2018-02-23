var audio_setup = false;

var  stream;
var  recorder;
var  chunks;
var  audioOptions =  {
    tag: 'audio',
    type: 'audio/ogg',
    ext: '.ogg'
};

var start_audio_text = "Record"
var stop_audio_text = "Stop"

var audio_button = $("#audio_button"); 
audio_button.text(start_audio_text);
audio_button.click(on_audio_click);

function setup_audio_recording() {
    navigator.mediaDevices.getUserMedia({audio: true}).then(_stream => {
        stream = _stream;
        recorder = new MediaRecorder(stream);
        recorder.ondataavailable = e => {
            chunks.push(e.data);
            if(recorder.state == 'inactive')  make_blob();
        };
        audio_setup = true;
        console.log('got media successfully');
    },
    _reason => {
        audio_button.prop('disabled', true);
        alert("Cannot get audio. Reason: " + _reason);
    });
}

setup_audio_recording()

function on_audio_click(e) {
    if(audio_button.text() === start_audio_text) {
        start_recording();
    } else if(audio_button.text() === stop_audio_text) {
        stop_recording();
    }

}

function start_recording() {
    if(!audio_setup) {
        audio_button.prop('disabled', true);
        audio_button.text("Problems recording audio");
        return
    }
    audio_button.text(stop_audio_text);
    chunks=[];
    recorder.start();
}

function stop_recording() {
    audio_button.text(start_audio_text);
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
