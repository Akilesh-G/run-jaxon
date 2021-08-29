var left;
var right;
var path;
var jaxon,jaxon_running;
function preload(){
  //pre-load images
jaxon_running=loadAnimation("Runner-1.png" , "Runner-2.png");
pathImg=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
left=createSprite(0,200,100,400);
right=createSprite(400,200,100,400);
left.visible=false;
right.visible=false;
path=createSprite(200,200);
path.addImage("backgroundImage" , pathImg);
path.velocityY=4;
path.scale=1.2

jaxon=createSprite(200,340,20,10)
jaxon.addAnimation("running",jaxon_running);
jaxon.scale=0.08

}

function draw() {
  background(0);
if(path.y>400){
  path.y=height/2
}
jaxon.x=World.mouseX;
edges= createEdgeSprites();
  jaxon.collide(edges[3]);
  jaxon.collide(left);
  jaxon.collide(right);
drawSprites()
}
