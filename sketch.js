var moving_rect;
var fixed_rect;
var gameobject1,gameobject2,gameobject3,gameobject4;


function setup() {
  createCanvas(1200,800);
  moving_rect=createSprite(600, 400, 50, 80);
  moving_rect.shapeColor="green";
  fixed_rect=createSprite(800,400,80,30);
  fixed_rect.shapeColor="green";

  gameobject1=createSprite(100,100,50,50);
  gameobject2=createSprite(200,100,50,50);
  gameobject3=createSprite(300,100,50,50);
  gameobject4=createSprite(400,100,50,50);

  
}

function draw() {
  background(255,255,255);  
//moving_rect.x=World.mouseX;
//moving_rect.y=World.mouseY;

gameobject3.x=World.mouseX
gameobject3.y=World.mouseY


if(isTouching(gameobject3,gameobject2))
{
  gameobject3.shapeColor="red";
  gameobject2.shapeColor="red";
}
else
{
  gameobject3.shapeColor="black";
  gameobject2.shapeColor="black";
} 
bounceOff(gameobject3,gameobject4)



  drawSprites();
}

