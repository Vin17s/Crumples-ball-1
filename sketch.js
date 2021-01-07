
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper (200,480,40)
	
	ground = Bodies.rectangle(width/6, 500, width, 10 , {isStatic:true} );
	World.add(world,ground);
   dustbin = new Dustbin(1000,380)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	paper1.display()
	dustbin.display()
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}

}


