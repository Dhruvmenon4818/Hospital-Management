
var backgroundimg

var doctor, patient, doctorImg, patientImg

function preload(){
backgroundimg=loadImage("hospitalimage.png");
doctorImg=loadImage("doctor2.png");
patientImg=loadImage("patient10.png");


}

function setup(){
    createCanvas(windowWidth,windowHeight);
    
    doctor=createSprite(1000,400,200,200);
doctor.addImage(doctorImg);
 doctor.scale=0.2
 patient=createSprite(400,400,100,100);
 patient.addImage(patientImg);
 patient.scale=1
}

function intro(){
fill("lightgreen")
ellipse(850,300,200,50)
fill("yellow")
text("Hello, how may i help you?",780,300);


}

function draw(){
    background(backgroundimg);
    intro();
drawSprites();
}