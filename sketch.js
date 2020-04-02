const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world
allraindrops = []

function setup() {
  createCanvas(800,400);

  engine = Engine.create()
  world = engine.world;

}

//if (0<1) {
  //allraindrops.push(new Raindrop(random(0,400),0, random(1,4), random(10, 40)));
//}

function draw() {
  background(255);
  
  Engine.update(engine);

  if (0<1) {
    allraindrops.push(new Raindrop(random(0,400),0, random(1,4), random(10, 40)));
  }
 

  for (var i = 0 ; i < allraindrops.length ; i++) {
    allraindrops[i].display();
  }

  

  drawSprites();
}