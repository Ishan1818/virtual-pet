var dog, dogimg, dogimg2;
var database;
var FoodStk, fs;
function preload()
{
dogimg=loadImage("dogImg.png")
dogimg2=loadImage("dogImg1.png")

}

function setup() {
  database=firebase.database()
	createCanvas(800, 700);
dog=createSprite(700, 500, 20, 20)
 dog.addImage(dogimg) 
dog.scale=0.2;

FoodStk=database.ref('FOOD')
FoodStk.on("value", readStk)
}


function draw() {  
  background("Orange")
if (keyWentDown(UP_ARROW)){
  writeStock(fs)
  dog.addImage(dogimg2)
}
fill ("red")
textSize(15)
text("REMAINING FOOD---"+ fs, 200, 200)
text("Please press the up arrow key to feed the dog", 200, 50)



  drawSprites();
  }
function readStk(data){
fs=data.val();
  
}
function writeStock(x){
if(x<=0){
  x=0;
  
}else{
  x=x-1;
}
database.ref('/').update({
  FOOD:x
  
})
}





