const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundimg

function preload(){
backgroundimg=loadImage("hospitalimage.png");


}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    
}

function draw(){
    background(backgroundimg);
    Engine.update(engine);

}