var car,wall;
var car1,wall1;


var speed,weight;
var speed1,weight1;


function setup() {
  createCanvas(2100,600);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,50,50);
  car1 = createSprite(50,300,50,50);
  wall1 = createSprite(1500,300,50,50);
  

  car.shapeColor = "black"
  car1.shapeColor = "black"
  

  speed=random(60,90);
  weight=random(120,180);
  speed1 = random(60,90);
  weight1 = random(120,180);
  

  car.velocityX = speed;
  car1.velocityX = speed1;
  
  
}

function draw() {
  background(255,255,255);  
  drawSprites();


  if(wall.x - car.x < (wall.width/2 + car.width/2))
  {
    car.velocityX = 0;
    var deformation = random(1,11) *  speed * speed/22509;

    if(deformation > 10)
    
    {
     car.shapeColor = "Red";
    }

    if(deformation<10 && deformation>8)
    {
      car.shapeColor = "Yellow";
    }

    if(deformation<8)
    {
      car.shapeColor = "Green";
    }

  }

  if(wall1.x - car1.x < (wall1.width/2 + car1.width/2))
  {
    car1.velocityX = 0;
    var deformation = random(1,11)  *  weight1  *  speed1 * speed/22509;

    if(deformation > 10)
    
    {
     car1.shapeColor = "Red";
    }

    if(deformation<10 && deformation>5)
    {
      car1.shapeColor = "Yellow";
    }

    if(deformation<5)
    {
      car1.shapeColor = "Green";
    }

  }
}
