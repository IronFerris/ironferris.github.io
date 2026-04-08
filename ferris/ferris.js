function setup() {
  createCanvas(600, 600);
  
}

function draw() {

  background(255, 207, 250);
  
  let flesh = color(252, 206, 136);
  let hair = color(71, 41, 11);

  //shirt-----------
  fill(51, 51, 51);
  stroke(0, 0, 0);
  strokeWeight(5);
  arc(240, 620, 200, 200, PI, 0, CHORD);
  arc(360, 620, 200, 200, PI, 0, CHORD);
  noStroke();
  quad(250, 520, 350, 520, 350, 600, 250, 600);
  
  //neck-----------
  fill(flesh);
  stroke('black');
  strokeWeight(5);
  beginShape();
  vertex(250, 400); 
  vertex(350, 400); 
  vertex(350, 540);
  vertex(300, 550);
  vertex(250, 540);
  endShape(CLOSE);
  
  //ponytail----------
  fill(hair);
  strokeWeight(5);
  circle(425, 430, 50);
  beginShape();
  vertex(425, 405);
  bezierVertex(465, 400, 475, 400, 475, 380);
  bezierVertex(475, 440, 450, 450, 425, 455);
  endShape();
  
  stroke('black');
  strokeWeight(5);
  fill(flesh);

  //chin-----------
  quad(191, 439, 409, 439, 365, 495, 235, 495);
  //ears-----------
  ellipse(145, 320, 55, 80);
  ellipse(455, 320, 55, 80);
  //head-----------
  ellipse(300, 300, 320, 380);
  //chin fill-----------
  noStroke();
  quad(194, 438, 407, 437, 365, 492, 235, 492);
  
  //eyes-----------
  stroke('black');
  strokeWeight(5);
  //ellipse(230, 300, 95, 70);
  arc(230, 300, 80, 70, PI, 0, OPEN);
  line(185, 300, 190, 300);
  //ellipse(370, 300, 95, 70);
  arc(370, 300, 80, 70, PI, 0, OPEN);
  line(410, 300, 415, 300);
  
  //pupils-----------
  strokeWeight(5);
  fill(105, 60, 15);
  ellipse(235, 300, 70, 67);
  ellipse(365, 300, 70, 67);
  strokeWeight(20);
  line(220, 300, 250, 300);
  line(350, 300, 380, 300);
  //nose-----------
  stroke('black');
  strokeWeight(5);
  line(300, 330, 280, 370);
  line(300, 380, 280, 370);
  //mouth-----------
  strokeWeight(15);
  fill(0, 0, 0);
  stroke('black');
  arc(300, 410, 60, 80, 0, PI, CHORD);
  
  strokeWeight(5);
  fill(110, 29, 38);
  stroke(110, 29, 38);
  arc(300, 410, 60, 80, 0, PI, CHORD);
  
  strokeWeight(0);
  fill(196, 104, 139);
  arc(300, 435, 30, 30, 0, PI, CHORD);
  arc(300, 435, 30, 10, PI, 0, CHORD);

  //hair-----------
  stroke('black');
  fill(hair);
  strokeWeight(5);
  
  beginShape();
  vertex(310, 130);
  bezierVertex(250, 250, 225, 225, 175, 235);
  vertex(175, 200);
  vertex(200, 150);
  endShape();
  
  beginShape();
  vertex(300, 110);
  vertex(280, 100);
  bezierVertex(100, 150, 130, 300, 145, 400);
  bezierVertex(200, 150, 190, 200, 290, 130);
  endShape();
  
  beginShape();
  vertex(280, 130);
  bezierVertex(200, 200, 330, 300, 440, 240);
  vertex(400, 170);
  vertex(300, 110);
  endShape();
  
  beginShape();
  vertex(300, 110);
  vertex(320, 100);
  bezierVertex(500, 150, 470, 300, 455, 400);
  bezierVertex(400, 130, 410, 200, 310, 130);
  endShape();
  
  //eyebrows-----------
  strokeWeight(10);
  line(190, 260, 230, 240);
  line(230, 240, 270, 260);
  line(410, 260, 370, 240);
  line(370, 240, 330, 260);
  
}
