function take_snapshot(){
    Webcam.snap(function(data_url) {
    documnet.getElementById("result").innerHTML = '<img id="captured _image" src="' +data_uri+'"/>';
    console.log(m15 verson:;,m15.version);
    classifier = m15.imageClassifier('')
    }
    function modelLoaded{
        console.log('Model Loaded!');
    }

    function speak(){
        var synth = window.speechSynthesis;
        speak_data_1 = "The first prediction is" + prediction_1;
        speak_data_2 = "And the second prediction is" + prediction_2;
        var utterThsi = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
       utrerThis.rate = 0.5;
       synth.speak(utterThsi); 
    }
