const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground1;
var pig1;
var box2;
var log1;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    ground1 = new ground(200,350,400,20);
    pig1 = new pig(250,300,30,30);
    box2 = new Box(300,300,50,50);
    log1 = new log(250,250,180,PI/2);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   ground1.display();
   pig1.display();
   box2.display();
   log1.display();
}