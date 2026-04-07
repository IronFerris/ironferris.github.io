function setup() {
  createCanvas(600, 600);
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
  fill(255, 255, 255);
  ellipse(230, 300, 95, 70);
  ellipse(370, 300, 95, 70);
  //pupils-----------
  strokeWeight(5);
  fill(105, 60, 15);
  ellipse(230, 300, 70, 67);
  ellipse(370, 300, 70, 67);
  strokeWeight(20);
  line(215, 300, 245, 300);
  line(355, 300, 385, 300);
  //nose-----------
  stroke('black');
  strokeWeight(5);
  line(300, 330, 280, 370);
  line(300, 380, 280, 370);
  //mouth-----------
  strokeWeight(15);
  fill(0, 0, 0);
  stroke('black');
  arc(300, 410, 40, 80, 0, PI, CHORD);

  //hair-----------
  fill(hair);
  strokeWeight(5);
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
  strokeWeight(15);
  line(190, 250, 230, 240);
  line(230, 240, 270, 250);
  line(410, 250, 370, 240);
  line(370, 240, 330, 250);
}

function draw() {

}
