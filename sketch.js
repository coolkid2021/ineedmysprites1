
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3;
var ground1;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
  ground1 = new Ground(400,680,2800,20);
	bin1 = new Bin(1400,660,200,20);
	bin2 = new Bin(1310,600,20,150);
	bin3 = new Bin(1490,600,20,150);
	paper = new Paper(200,630,50);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  console.log(paper.y);
    bin1.display();
	  bin2.display();
	  bin3.display();
	  ground1.display();
    paper.display();
    
    if(keyPressed() && paper.y<500){
      paper.velocityY=0;
    }

    paper.velocityY=paper.velocityY+70;

    fill("white");
    textSize(12);
    text("Press Up to move",1000,200);
    text("Press Down to Stop",1000,250);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-40});

  }
  if(keyCode===null){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:0});

  }
}