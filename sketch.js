var balloon,balloonI
var position
var bg,bgI

function preload(){
  bgI=loadImage("bg.png")
  balloonI=loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")
}



function setup() {
  database=firebase.database();
  createCanvas(800,400);
  balloon = createSprite(200, 200, 50, 50);
  balloon.addAnimation("b",balloonI)
  balloon.scale=0.5

  var ballposition=database.ref('balloon/position')
   ballposition.on("value", readPosition)
}

function draw() {
  background(bgI);  

  if(keyDown(LEFT_ARROW)){
    Position(-1,0)
    }
else if(keyDown(RIGHT_ARROW)){
  Position(1,0)
}
else if(keyDown(UP_ARROW)){
  Position(0,-1)
   balloon.scale = 0.35;
}
else if(keyDown(DOWN_ARROW)){
  Position(0,+1)
    balloon.scale = 0.25;
  }
   
  drawSprites();
}

function Position(x,y)
{
  database.ref('balloon/position').set({
    'x': position.x + x , 
    'y': position.y + y
  })
}

function readPosition(data)
{
  position = data.val();
  balloon.x = position.x;
  balloon.y = position.y;
}

