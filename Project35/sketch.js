var balloon,background;
var balloonImg,backgroundImg;
function preload(){
backgroundImg = loadImage("images/1.png")
balloonImg = loadAnimation("images/2.png","images/3.png")
}

function setup() {
 database = firebase.database(); 
console.log(database);
createCanvas(500,500);

balloon = createSprite(100, 400, 20, 20);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.4;

}

function draw() {

  background(backgroundImg);
  
  if(keyDown(LEFT_ARROW)){
      balloon.x = balloon.x-10;
      }

      if(keyDown(RIGHT_ARROW)){
        balloon.x = balloon.x+10;
        }
  
        if(keyDown(UP_ARROW)){
          balloon.y = balloon.y-10;
          }
    
          if(keyDown(DOWN_ARROW)){
            balloon.y = balloon.y+10;
 }
  
  drawSprites();
}