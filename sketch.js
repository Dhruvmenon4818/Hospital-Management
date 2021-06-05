
var backgroundimg

var doctor, patient, doctorImg, patientImg

function preload(){
backgroundimg=loadImage("hospitalimage.png");
doctorImg=loadImage("doctor2.png");
patientImg=loadImage("patient.png");


}

function setup(){
    createCanvas(windowWidth,windowHeight);
    
    doctor=createSprite(1000,400,200,200);
doctor.addImage(doctorImg);
 doctor.scale=0.2
}

function draw(){
    background(backgroundimg);
    
drawSprites();
}