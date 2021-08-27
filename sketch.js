var NewYorkImg;
var HouseImage;
var House2Image;
var officeImg;
var peopleImg;
var ZombieAttackImg;
var GoalImg;

var gameState= "Story";

var NewYork;
var House;
var House2;
var Office;
var People;
var ZombieAttack;
var Goal;

function preload(){

NewYorkImg=loadImage("Bg/New York.jpg");
HouseImage=loadImage("Bg/House.jpg");
House2Image=loadImage("Bg/House2.jpg");
GoalImg=loadImage("Bg/Goal.jpg");
officeImg=loadImage("Bg/Office.jpg");
peopleImg=loadImage("Bg/People.jpg")
ZombieAttackImg=loadImage("Bg/Zombie Attack.jpg")


}


function setup() {

  createCanvas(windowWidth,windowHeight);

  NewYork=createSprite(width/2,height/2,width,height);
  House=createSprite(width/2,height/2,width,height);
  House2=createSprite(width/2,height/2,width,height);
  Office=createSprite(width/2,height/2,width,height);
  People=createSprite(width/2,height/2,width,height);
  ZombieAttack=createSprite(width/2,height/2,width,height);
  Goal=createSprite(width/2,height/2,width,height);

  NewYork.addImage(NewYorkImg);
  House.addImage(HouseImage);
  House2.addImage(House2Image);
  Office.addImage(officeImg);
  People.addImage(peopleImg);
  ZombieAttack.addImage(ZombieAttackImg);
 NewYork.visible= false;
 House.visible= false;
 House2.visible= false;
 Office.visible= false;
 People.visible= false;
 ZombieAttack.visible= false;
 Goal.visible= false;

}

function draw() {
  background('black')
  
  if(gameState==="Story"){
    
    if(frameCount<50){
     NewYork.visible=true;
    NewYork.lifetime=100;
    }
     if(frameCount>150 && frameCount<250){
       Office.visible=true;
       Office.lifetime=100;
   }
    if(frameCount>350 && frameCount<500){
     ZombieAttack.visible=true;
     ZombieAttack.lifetime=100;
    }
    if(frameCount>600 && frameCount<750){
      People.visible=true;
      People.lifetime=100;
    }
   if(frameCount>850 && frameCount<970){
     House.visible=true;
     House.lifetime=100;
   }
   if(frameCount>1100 && frameCount<1250){
     House2.visible=true;
      House2.lifetime=100;
    }
    if(frameCount>1350 && frameCount<1450){
      Goal.visible=true;
      Goal.lifetime=100;
    }

  }

  drawSprites();
}
