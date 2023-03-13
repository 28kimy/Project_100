var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function begin()
{
    recognition.begin();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    setTimeout(function(){
        img_id="img1";
        take_snapshot();
        speak_data = "Taking your selfie in 3, 2, 1!";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 3000);

}

function take_snapshot(){
    console.log(img_id);
    Webcam.snap(function(data_uri){
        if(img_id=="img1"){
            document.getElementById("result1").innerHTML='<img id="img1" src"'+data_uri+'"/>';
        }
        if(img_id=="img2"){
            document.getElementById("result2").innerHTML='<img id="img2" src"'+data_uri+'"/>';
        }
        if(img_id=="img3"){
            document.getElementById("result3").innerHTML='<img id="img3" src"'+data_uri+'"/>';
        }
    });
}