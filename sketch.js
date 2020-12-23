var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);

  wall=createSprite(800,200,40,height/2);
  car=createSprite(50,200,40,40);

  speed=random(15,20);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255); 


if(keyDown("space")){
  car.velocityX=speed;
}
console.log(speed);

if (wall.x-car.x<(car.width+wall.width/2)) {
 car.velocityX=0;

var deformation=0.5*weight*speed*speed/22509;

 if (deformation>180) {
  car.shapeColor="red";
}

if (deformation>180 && deformation<100) {
car.shapeColor="yellow";   
  
}

if (deformation<100) {
car.shapeColor="green";
  
}


}
  drawSprites();
}
