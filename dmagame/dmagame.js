var ballx = 300;
var bally = 300;
var ballSize = 60;
var score = 0;
var gameState = "Title";
var img, img2;
var easing = 0.01;
var followx = 0;
var followy = 0;

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  //bgimg = loadImage('https://ironferris.github.io/images/bliss.png');
  img = loadImage('https://ironferris.github.io/images/gorbbg.png');
  img2 = loadImage('https://ironferris.github.io/images/uncannygorbbg.png');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  background(220);
} // end of setup ==========================================

function draw() {
  background(220);
  if(gameState == "Title"){
    titleScreen();
  }
  if(gameState == "L1"){
    levelOne();
  }
  if(gameState == "L2"){
    levelTwo();
  }
  if(gameState == "L3"){
    levelThree();
  }
  if(gameState == "Win"){
   winScreen();
  }
  if(gameState != "Title"){
    text(("Score: " + score), width/2, 40);
    
    let targetX = mouseX;
    followx += (targetX - followx) * easing;
    
    let targetY = mouseY;
    followy += (targetY - followy) * easing;
    
    image(img2, followx-25, followy-25, ballSize, ballSize);
    
    var distToEvil = dist(followx, followy, mouseX, mouseY);
    if(distToEvil < ballSize/1.5){
      score = 0;
      followx = 0;
      followy = 0;
      ballx = random(width-ballSize)+ballSize/2;
      bally = random(height-ballSize)+ballSize/2;
      gameState = "Death";    
    }
   }  
  if(gameState == "Death"){
   deathScreen();
  }
  
} // end of draw ===========================================

function titleScreen(){
  gameState = "Title";
  textFont('Courier New', 30);
  text("WELCOME TO", width/4, 200); 
  text("Uncanny Dog Game", width/2, 250);
  textFont('Courier New', 20);
  text("Click anywhere to begin", width/2, 350);
  
  if (mouseIsPressed === true) {
    gameState = "L1";
  }
} // end of title ==========================================


function levelOne(){
  textFont('Courier New', 30);
  text("Level 1", width/2, height-20);
  easing = 0.01;
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width-ballSize)+ballSize/2;
    bally = random(height-ballSize)+ballSize/2;
    score = score + 1;
  }
  
  if(score >= 5){
    gameState = "L2";
  }
  
  image(img, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
 
} // end of level 1 ========================================

function levelTwo(){
  background(200, 200, 200);
  text("Level 2", width/2, height-20);
  easing = 0.03;
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width-ballSize)+ballSize/2;
    bally = random(height-ballSize)+ballSize/2;
    score = score + 1;
  }
  
  if(score >= 15){
    gameState = "L3";
  }
  
  image(img, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  
} // end of level 2 ========================================

function levelThree(){
  background(150, 150, 150);
  text("Level 3", width/2, height-20);
  easing = 0.05;
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width-ballSize)+ballSize/2;
    bally = random(height-ballSize)+ballSize/2;
    score = score + 1;
  }
  
  if(score >= 25){
    gameState = "Win";
  }
  
  image(img, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  
} // end of level 3 ========================================

function deathScreen(){
  background(img2);
  
  if (mouseIsPressed === true) {
    gameState = "L1";
  }
}

function winScreen(){
  background(img);
  textFont('Courier New', 50);
  text("You Win!!!", width/2, 250);
  text("Click anywhere to return to title", width/2, 350);
  
  if (mouseIsPressed === true) {
    gameState = "Title";
  }
}
