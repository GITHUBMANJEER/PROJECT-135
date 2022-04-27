video="";
progress="";
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
   
}
function preload(){
    video=createVideo('video.mp4');
    video.hide();

}
function draw(){
    image(video,0,0,480,380);
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Object Detecting";

}
function modelLoaded(){
    console.log("Model Loaded!");
    progress=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}