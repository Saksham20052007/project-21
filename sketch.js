var bullet, wall;
var speed, wieght, thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  wieght=random(400,1500) 
  thickness = random(22, 83);

  bullet = createSprite(0, 200, 100, 5 );
  bullet.shapeColor = "white";
   wall = createSprite(800, 200, thickness, height/2 );

bullet.velocityX = speed;
  
}

function draw() {
  background("black");


  
  if(bullet.x-wall.x>bullet.width/2+wall.width/2){
    bullet.velocityX = 0;
  
    var deformation = 0.5*wieght*speed*speed/22500
    if(deformation<80){
      wall.shapeColor = "green";
    }
     if(deformation>80 && deformation<180){
      wall.shapeColor = "red"; 
    }
    if(deformation>180){
      wall.shapeColor = "yellow";
    }
  }

  drawSprites();
}