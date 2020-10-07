var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(200, 200, 80, 50);
  movingRect.shapeColor = "white";
  movingRect.velocityX = 4;

  fixedRect = createSprite(800, 200, 50, 80);
  fixedRect.shapeColor = "white";
  fixedRect.velocityX = -4;
}

function draw() {
  background(0, 0, 0);  

  /*movingRect.y = mouseY;
  movingRect.x = mouseX;*/

  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2){
      fixedRect.velocityX = fixedRect.velocityX * (-1);
      movingRect.velocityX = movingRect.velocityX * (-1);
  }

  if(fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 && 
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2){
      fixedRect.velocityY = fixedRect.velocityY * (-1);
      movingRect.velocityY   = movingRect.velocityY * (-1);
  }

  /*if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 && 
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "white";
    movingRect.shapeColor = "white";
  }*/



  drawSprites();
}
