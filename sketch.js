const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball ; 
var opt1  ; 
var button1,button2;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
button1 = createImg("right.png");
button1.position (250,200);
button1.size(20,20);
button1.mouseClicked(hforce);
button2= createImg("up.png");
button2.position(100,120);
button2.size(20,20);
button2.mouseClicked(vforce);


  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 opt1={
   restitution:1.0  
 } 
  ball = Bodies.circle(200,200,35,opt1)  ;
  World.add(world,ball);

 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  
  Engine.update(engine);
    ellipse(ball.position.x , ball.position.y , 35,35);
}

function vforce(){
Matter.Body.applyForce(ball,{x:0,y:0},{ x:0,y:-0.09})


}
function hforce(){
Matter.Body.applyForce(ball,{x:0,y:0}, {x:0.09,y:0})



}