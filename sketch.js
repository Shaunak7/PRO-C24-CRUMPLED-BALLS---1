
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paperBall = new Paper(100,300,30);

	dustbin1= new dustbin(400,510,20,100)
	dustbin2= new dustbin(500,550,200,20)
	dustbin3= new dustbin(600,510,20,100)

	ground1=new ground(400,570,800,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();


  paperBall.display();

  
  dustbin2.display();
  dustbin3.display();
  dustbin1.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:20,y:-35});
}
}

