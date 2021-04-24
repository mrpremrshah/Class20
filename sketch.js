var a,b;


function setup() {
  createCanvas(800,400);
  a = createSprite(200, 200, 30, 30);
  a.shapeColor = "green";

  b = createSprite(400, 200, 50, 50);
  b.shapeColor = "green";
}

function draw() {
  background("white");  

  a.x = World.mouseX;
  a.y = World.mouseY;

  if(a.x-b.x < a.width/2 + b.width/2 && b.x-a.x < a.width/2 + b.width/2
    && a.y-b.y < a.height/2 + b.height/2 && b.y-a.y < a.height/2 + b.height/2) {
      a.shapeColor = "red";
      b.shapeColor = "red";

  }

  else {
    a.shapecolor = "green";
    b.shapeColor = "green";
  }


  drawSprites();
}