
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperobj,groundobj,dustbin1,dustbin2,dustbin3; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperobj = new Paper(50,610,10)

	groundobj = new Ground(400,650,800,15);

	 dustbin1 = new Dustbin(700,593,10,100);
	 dustbin2 = new Dustbin(500,593,10,100);
	 dustbin3 = new Dustbin(600,638,190,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

paperobj.display();
groundobj.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:15,y:-15});
	}
}

