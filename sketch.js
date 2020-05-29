var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	box=createSprite(400,670,190,10);
	box.shapeColor=color("red");
	box1=createSprite(300,630,10,90);
	box1.shapeColor=color("red");
	box2=createSprite(490,630,10,90);
	box2.shapeColor=color("red");

	box3=createSprite(200,670,190,10);
	box3.shapeColor=color("red");
	box4=createSprite(100,630,10,90);
	box4.shapeColor=color("red");
	box5=createSprite(490,630,10,90);
	box5.shapeColor=color("red");


	ball = new Ball(100,100,20,20)

	ball = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Ball.desplay();

  drawSprites();
 
}

	function keyPresed(){

	Matter.Body.applyForce(ballObject.body,ballObject.body.position,{x:85,y:-85});

	}

