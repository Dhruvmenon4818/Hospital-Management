
var backgroundimg

var doctor, patient, doctorImg, patientImg, medicineImg1, medicineImg2, medicineImg3
var gameState="intro"
var symptom1, symptom2, symptom3
function preload(){
backgroundimg=loadImage("hospitalimage.png");
doctorImg=loadImage("doctor2.png");
patientImg=loadImage("patient10.png");
medicineImg1=loadImage("med1.png");
medicineImg2=loadImage("med2.png");
medicineImg3=loadImage("med3.png");


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
fill("red")
text("Hello, how may i help you?",780,300);
fill("yellow")
ellipse(400,200,200,50);
fill("red")
text("Hello doctor.Ahhhhh!!!",350,200);
symptom1=createSprite(200,200,100,50);
symptom1.shapeColor="yellow"
text("fever",200,220);
}
function draw(){
    background(backgroundimg);
    if(gameState==="intro"){
        intro();

    }
    
drawSprites();
}