
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var roof;
var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(800,height/4,width/7,20);
	bobDiameter=40;
	startX=width/2
	bobY=height/4+500;
	bobobject1=new Bob(startX-bobDiameter*2,bobY,bobDiameter);
	bobobject2=new Bob(startX-bobDiameter,bobY,bobDiameter);
	bobobject3=new Bob(startX,bobY,bobDiameter);
	bobobject4=new Bob(startX+bobDiameter,bobY,bobDiameter);
	bobobject5=new Bob(startX+bobDiameter*2,bobY,bobDiameter);

	rope1=new Rope(bobobject1.body,roof.body,-bobDiameter*2,0);
	rope2=new Rope(bobobject2.body,roof.body,-bobDiameter,0);
	rope3=new Rope(bobobject3.body,roof.body,0,0);
	rope4=new Rope(bobobject4.body,roof.body,bobDiameter,0);
	rope5=new Rope(bobobject5.body,roof.body,bobDiameter*2,0);
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();

 // drawSprites();
  //keyPressed();

 
}

function keyPressed(){
	if(keyCode === 	32){
		console.log("hello")
		Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:-50,y:-45})
	}
}

