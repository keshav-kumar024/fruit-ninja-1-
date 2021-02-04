

function preload(){
swordImage=loadImage("sword.png")
  fruit1=loadImage("fruit1.png")
   fruit2=loadImage("fruit2.png")
   fruit3=loadImage("fruit3.png")
   fruit4=loadImage("fruit4.png")
  monsterImage=loadImage("alien1.png","alien2.png")
  
  
}

function setup(){
createCanvas(600,600)
  sword=createSprite(40,200,20,20)
  sword.addImage(swordImage)
  
  
  score=0
  
}

function draw(){
background("pink")
  sword.x=World.mouseX
  sword.y=World.mouseY
  
  
  
  
  
  fruits()
  Enemy()
  drawSprites()
  text("score:"+score,500,50)
}
function fruits(){
  if(frameCount%200==0){
    
fruit=createSprite(400,200,20,20) 
r=Math.round(random(1,4))
if(r==1){
 fruit.addImage(fruit1) 
}
else if(r==2)  {
 fruit.addImage(fruit2) 
}
else if(r==3) {
  fruit.addImage(fruit3)
  
}
  else {
   fruit.addImage(fruit4) 
    
    
  }
  fruit.velocityX=-7
  fruit.scale=0.2  
}
}



function Enemy(){
  if(World.frameCount%200===0){
  monster=createSprite(400,200,20,20);
  monster.addAnimation("moving",monsterImage);
  monster.y=Math.round(random(100,300));
  monster.velocityX=-(8+(score/10));
  monster.setLifetime=50;
  
  
  
  } 
}










