var bgimg;
var img, img2, img3, img4, img5, img6, img7, img8, img9, img10;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

var brushSize = 0;

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  bgimg = loadImage('https://ironferris.github.io/images/bliss.png');
  img = loadImage('https://ironferris.github.io/images/fatteto.png');
  img2 = loadImage('https://ironferris.github.io/images/mozylong.png');
  img3 = loadImage('https://ironferris.github.io/images/gorb.png');
  img4 = loadImage('https://ironferris.github.io/images/clov.png');
  img5 = loadImage('https://ironferris.github.io/images/stage.png');
  img6 = loadImage('https://ironferris.github.io/images/mic.png');
  img7 = loadImage('https://ironferris.github.io/images/bass.png');
  img8 = loadImage('https://ironferris.github.io/images/drums.png');
  img9 = loadImage('https://ironferris.github.io/images/guitar.png');
  img10 = loadImage('https://ironferris.github.io/images/crowd.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(bgimg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  
    if (key === '[') {
    brushSize = brushSize + 1;
    }
    
    if (key === ']') {
    brushSize = brushSize - 1;
    }
    
    
  
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
  
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

if (toolChoice == '1') { // g places the image we pre-loaded
    image(img, mouseX-25-(brushSize/2), mouseY-25-(brushSize/2), 50 + brushSize, 50 + brushSize);
    
  } else if (toolChoice == '2') { // g places the image we pre-loaded
    image(img2, mouseX-25-(brushSize/2), mouseY-25-(brushSize/2), 50 + brushSize, 116 + (brushSize*2));
    
  } else if (toolChoice == '3') { // g places the image we pre-loaded
    image(img3, mouseX-25-(brushSize/2), mouseY-25-(brushSize/2), 50 + brushSize, 50 + brushSize);
    
  } else if (toolChoice == '4') { // g places the image we pre-loaded
    image(img4, mouseX-25-(brushSize/2), mouseY-25-(brushSize/2), 50 + brushSize, 75 + brushSize*2);
    
  } else if (toolChoice == '5') { // g places the image we pre-loaded
    image(img5, mouseX-200-(brushSize/2), mouseY-200-(brushSize/2), 500 + brushSize, 500 + brushSize);
    
  } else if (toolChoice == '6') { // g places the image we pre-loaded
    image(img6, mouseX-25-(brushSize/2), mouseY-25-(brushSize/2), 50 + brushSize, 50 + brushSize);
    
  } else if (toolChoice == '7') { // g places the image we pre-loaded
    image(img7, mouseX-25-(brushSize/2), mouseY-25-(brushSize/2), 75 + brushSize*1.5, 50 + brushSize);
    
  } else if (toolChoice == '8') { // g places the image we pre-loaded
    image(img8, mouseX-25-(brushSize/2), mouseY-25-(brushSize/2), 50 + brushSize, 50 + brushSize);
    
  } else if (toolChoice == '9') { // g places the image we pre-loaded
    image(img9, mouseX-25-(brushSize/2), mouseY-25-(brushSize/2), 75 + brushSize*1.5, 50 + brushSize);
    
  } else if (toolChoice == '0') { // g places the image we pre-loaded
    image(img10, mouseX-25-(brushSize/2), mouseY-25-(brushSize/2), 200 + brushSize, 100 + brushSize);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(bgimg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
