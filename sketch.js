const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1;
var bird;
var log1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(600,590,1200,20);

    box1=new Box(500,100);
    log1=new Log(400,20,100,PI/2);

    bird=new Bird(200,200);

   
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    log1.display();

    box1.display();

    bird.display();
    
}