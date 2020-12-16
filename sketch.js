const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
function setup()
 {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world; 

var option = {
  isStatic: true
}

// to create a rectangular body
 ground =  Bodies.rectangle(200,350,400,50,option);
 World.add(world,ground);

var option2 = {
  restitution: 1.3
}
 ball = Bodies.circle(200,200,20,option2)
 //to add object to world
 World.add(world,ball);
  
 
 
}

function draw() {
  background("lightblue"); 
  Engine.update(engine);
  rectMode(CENTER);
  fill("green")
  //for displaying the rectangle
  rect(ground.position.x,ground.position.y,400,50);
  //treating width and height as radius
  fill("red")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);
  

}