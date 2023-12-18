
Webcam.set({
    width: 350,
    height: 350,
    image_format: 'png',
    png_quality: 90
});

Camera=document.getElementById("camera");
Webcam.attach(Camera);
function takesnap(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img id='captureimage' src='"+data_uri+"'</img>";
    });
}
classifier=ml5.imageClassifier("https ://teachablemachine.withgoogle.com/models/OMS_qT2Jy/model.jsom",modelready);
function modelready(){
    console.log("model is working");
}



