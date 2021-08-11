var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
  if (keyIsDown(DOWN_ARROW)){
    background('red');
  }
  if (keyIsDown(UP_ARROW)){
    background('green');
  }
  if (keyIsDown(LEFT_ARROW)){
    background('orange');
  }
  if (keyIsDown(RIGHT_ARROW)){
    background('yellow');
  }
  drawSprites();
}




