
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
// var box1,box2,box3,box4,box5;
var chain1,chain2,chain3,chain4,chain5;

var circleshape,circleshape2,circleshape3,circleshape4,circleshape5;
var boll;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	boll = createSprite(400,400,30,30);
	boll.shapeColor = "black"





	//Create the Bodies Here.
	ground = new Ground(500,100,500,20);


	circleshape = Bodies.circle(400,600,100);
	World.add(world,circleshape);
	console.log(circleshape);

	circleshape2 = Bodies.circle(500,600,100);
	World.add(world,circleshape);
	console.log(circleshape);

	circleshape3 = Bodies.circle(600,600,100);
	World.add(world,circleshape);
	console.log(circleshape);

	circleshape4 = Bodies.circle(700,600,100);
	World.add(world,circleshape);
	console.log(circleshape);

	circleshape5 = Bodies.circle(300,600,100);
	World.add(world,circleshape);
	console.log(circleshape);


	

	// chain1 = new Chain(circle.body,ground.body, -circleDiameter*2, 0)
	// chain2 = new Chain(circle.body,ground.body, -circleDiameter*2, 0)
	// chain3 = new Chain(circle.body,ground.body, -circleDiameter*2, 0)
	// chain4 = new Chain(circle.body,ground.body, -circleDiameter*2, 0)
	// chain5 = new Chain(circle.body,ground.body, -circleDiameter*2, 0)

	chain1 = new Slingshot(circleshape,{x:400,y:600});
	chain2 = new Slingshot(circleshape,{x:500,y:600});
	chain3 = new Slingshot(circleshape,{x:600,y:600});
	chain4 = new Slingshot(circleshape,{x:700,y:600});
	chain5 = new Slingshot(circleshape,{x:300,y:600});




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  boll.x = mouseX;
  boll.y = mouseY;

  circle(400,600,100);
  circle(500,600,100);
  circle(600,600,100);
  circle(700,600,100);
  circle(300,600,100);


  

  ground.display();
  boll.display();


  

  

   chain1.display();
   chain2.display();
   chain3.display();
   chain4.display();
   chain5.display();



  drawSprites();
 
}



