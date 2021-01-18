var fixedRect,movingRect;



function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(600, 400, 50,80);
  fixedRect.shapeColor="turquoise";
  movingRect=createSprite(200,200,80,50)
  movingRect.shapeColor="indigo"
}

function draw() {
  background("seagreen");
  console.log(movingRect.x-fixedRect.x)  
  console.log(fixedRect.x-movingRect.x)  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    &&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    &&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2)
{
  movingRect.shapeColor="lime"
  fixedRect.shapeColor="lime"
}
else
{
  movingRect.shapeColor="indigo"
  fixedRect.shapeColor="turquoise"
}
  drawSprites();
}