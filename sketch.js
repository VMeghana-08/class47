//const Engine=Matter.Engine
//const World=Matter.World
//const Bodies=Matter.Bodies
//const Constraint=Matter.Constraint
//var engine,world;
var bullsEye,bullet,edges
//var box=[]

function preload(){
  bullsEyeImage=loadImage("images/bullseye.png")
  gunImage=loadImage("images/gun.jpg") 
  bulletImage=loadImage("images/bullet.jpg")
}

function setup() {
  createCanvas(800,400);

 // engine=Engine.create();
 // world=engine.world;
  edges = createEdgeSprites(); 

  bullsEye=createSprite(400,50,70,70);
  bullsEye.addImage(bullsEyeImage);
  bullsEye.scale=0.1;
  bullsEye.debug=true;
  bullsEye.setCollider("rectangle",0,0,bullsEye.width,380)
  bullsEye.velocityX = 2
 // bullsEye.shapeColor="red"
 console.log(bullsEye.width)
 gun=createSprite(200,350,70,70);
 
 gun.addImage(gunImage);
 gun.scale=0.5;

 bulletsGroup=new Group();
  
 // bullsEye.body.Velocity.x=5;
 // bullsEye.body.velocity.y=5
//  console.log(bullsEye.body.velocity.x);
  //box2=new Box(920,320,70,70);
 // ground=new Ground(width/2,80,width,10);
  
}
function draw() {

  background("white");

  gun.x=mouseX;
 
  if(keyWentDown("space")){
    shootBullet();
  }
  // if(bulletsGroup.isTouching(bullsEye)){
  //   bulletsGroup.setVelocityYEach(0)
  //   bullsEye.velocityX = 0
  // }

  bullsEye.bounceOff(edges)

drawSprites();
 
}
function shootBullet(){
  bullet=createSprite(gun.x+18,gun.y-55)
  bullet.addImage(bulletImage);
  bullet.scale=0.03;
  bullet.velocityY=-5;
  bullet.debug=true;
  bullet.lifetime=100;

  console.log("bullet "+ bullet.x)
  console.log("bullsEye "+bullsEye.x)

if(bullet.y <= bullsEye.height){

  bullet.velocityY = 0;
  bullsEye.velocityX = 0;
  if(bullet.x>=bullsEye.x-10 && bullet.x<=bullsEye.x+10){
    console.log("yellow")
   }
  else if(bullet.x>=bullsEye.x-20 && bullet.x<=bullsEye.x+20){
     console.log("orange")
   }
 else if(bullet.x>=bullsEye.x-30 && bullet.x<=bullsEye.x+30){
     console.log("blue")
   }
 else if(bullet.x>=bullsEye.x-40 && bullet.x<=bullsEye.x+40){
     console.log("black")
   }
 else{
     console.log("no color")
   }

}


  bulletsGroup.add(bullet);



}
