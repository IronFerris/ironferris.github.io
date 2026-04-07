function setup() {
  createCanvas(600, 600);
  background(255, 207, 250);
  
  let flesh = color(252, 206, 136);
  let hair = color(71, 41, 11);
  
  strokeWeight(2);
  fill(flesh);

  //chin
  quad(191, 439, 409, 439, 365, 495, 235, 495);
  //ears
  ellipse(145, 320, 55, 80);
  ellipse(455, 320, 55, 80);
  //head
  ellipse(300, 300, 320, 380);
  
  //chin fill
  noStroke();
  quad(191, 438, 410, 437, 365, 494, 235, 494);
  
  //eyes
  stroke('black');
  strokeWeight(2);
  fill(255, 255, 255);
  ellipse(230, 300, 95, 75);
  ellipse(370, 300, 95, 75);
  
  //pupils
  fill(0, 0, 0);
  ellipse(230, 300, 50, 50);
  ellipse(370, 300, 50, 50);
  
  //nose
  stroke('black');
  strokeWeight(2);
  line(300, 330, 280, 370);
  line(300, 380, 280, 370);
  
  //eyebrows
  stroke(hair);
  strokeWeight(5);
  line(190, 250, 210, 240);
  line(210, 240, 260, 240);
  
}

function draw() {

}
