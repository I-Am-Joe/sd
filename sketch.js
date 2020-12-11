//Create variables here
var Dog,dogHappy;
var dogImgs,dogHappyImg;
var foodS,foodStock;
var database;

function preload()
{
  //load images here
  dogImgs=loadImage("dogImg");
  dogHappyImg=loadImage("dogImg1");
}

function setup() {
  createCanvas(500, 500);
  Dog=createSprite(100,100,10,10);
  Dog.loadImage("dogImg",dogImgs);

  database= firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46, 139, 87);
if(KeyWentDown(UP_ARROW)){
writeStock(foodS)
dogHappyImg.addImage("dogImg1",dogHappyImg);
}
  drawSprites();
  //add styles here
  fill(10);
  textSize(5);
  stroke();
  text("Press Up to feed him",250,450);

}
function readStock(data){
  foodS=data.val();

}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


