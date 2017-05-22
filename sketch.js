var xPos = 0;
var yPos = 0;

var fillVal = 0; 
var fillVal2 = 0; 

var a;
var a2; 
var b;
var b2;
var c; 
var d; 
var e; 
var f;
var g;
var h; 
var i;
var grey; 
var white; 

var constant = 40

var button
  

function preload() {

  a = color(46,181,165);
  b = color(245,239,39);
  c = color(145,135,195); 
  d = color(241,126,0);
  e = color(161,223,247); 
  f = color(253,179,210);
  g = color(88,54,136); 
  h = color(229,7,131); 
  i = color(5,165,228); 
  white = color(255,255,255);
  a2 = color(40,175,159); 
  b2 = color(240,235,33);
  grey = color(162,156,156);
}

function resetSketch() { 
  background(0);
  xPos = 0;
  yPos = 0;
  fillVal = 0; 
  fillVal2 = 0; 

}
function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(0);
  resetSketch();
  var button = createButton("reset");
  button.mouseClicked(resetSketch);
  button.position(20, windowHeight-30)
  noLoop();
  frameRate(0.01);
  
}




function draw() {
  //background(255)
  fill(fillVal);
  rect(xPos,yPos,constant,constant);
  noStroke(); 
  fill(fillVal2);
  rect(xPos,yPos,constant,constant/2);
  
  if(keyCode === BACKSPACE){
    if(xPos > 0){  
      xPos -= constant;
      
    } else if (xPos === 0 && yPos > 0) { 
      yPos -= constant;
      xPos = windowWidth;
    }
  } 
  
  if (keyCode == 32 || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 48 && keyCode <=58)) {
    xPos += constant;
    if(xPos >= windowWidth){
      xPos = 0; 
      yPos += constant;
    }
  }
  
  //xPos += 2;
  //yPos = random(200);
 // characterControls();
}

function keyPressed() {
  
  if (keyCode === 65 || keyCode === 49) {
    fillVal = a; 
    fillVal2 = a; 

  
  } else if (keyCode === 66 || keyCode === 50) {
    fillVal = b; 
    fillVal2 = b;


  } else if (keyCode === 67 || keyCode === 51) {
    fillVal = c; 
    fillVal2 = c;

    
  } else if (keyCode == 68 || keyCode == 52) {
    fillVal = d; 
    fillVal2 = d;

    
  } else if (keyCode === 69 || keyCode === 53) {
    fillVal = e; 
    fillVal2 = e;

    
  } else if (keyCode === 70 || keyCode === 54) {
    fillVal = f; 
    fillVal2 = f;

    
  } else if (keyCode === 71 || keyCode === 55) {
    fillVal = g; 
    fillVal2 = g;

    
  } else if (keyCode === 72 || keyCode === 56) {
    fillVal = h; 
    fillVal2 = h;

    
  } else if (keyCode === 73 || keyCode === 57) {
    fillVal = i; 
    fillVal2 = i;
    
   } else if (keyCode === 48) {
    fillVal = white; 
    fillVal2 = white;

    
  } else if (keyCode === 74) {
    fillVal = white; 
    fillVal2 = a;

    
  } else if (keyCode === 75) {
    fillVal = a2; 
    fillVal2 = a;

    
  } else if (keyCode === 76) {
    fillVal = b; 
    fillVal2 = a;

    
  } else if (keyCode === 77) {
    fillVal = c; 
    fillVal2 = a;

    
  } else if (keyCode === 78) {
    fillVal = d; 
    fillVal2 = a;
 
    
  } else if (keyCode === 79) {
    fillVal = e; 
    fillVal2 = a;

    
  } else if (keyCode === 80) {
    fillVal = f; 
    fillVal2 = a;

    
  } else if (keyCode === 81) {
    fillVal = g; 
    fillVal2 = a;

  
  } else if (keyCode === 82) {
    fillVal = h; 
    fillVal2 = a;

    
  } else if (keyCode === 83) {
    fillVal = i; 
    fillVal2 = a;

    
  } else if (keyCode === 84) {
    fillVal = white; 
    fillVal2 = b;

    
  } else if (keyCode === 85) {
    fillVal = a; 
    fillVal2 = b;

    
  } else if (keyCode === 86) {
    fillVal = b2; 
    fillVal2 = b;

    
  } else if (keyCode === 87) {
    fillVal = c; 
    fillVal2 = b;

    
  } else if (keyCode === 88) {
    fillVal = d; 
    fillVal2 = b;

    
  } else if (keyCode === 89) {
    fillVal = e; 
    fillVal2 = b;

    
  } else if (keyCode === 90) {
    fillVal = f; 
    fillVal2 = b;

  
  } else if (keyCode === 32) { 
    fillVal = grey; 
    fillVal2 = grey;

     
  } else if (keyCode === BACKSPACE) { 
    
    fillVal = 0; 
    fillVal2 = 0;
  }
  
  loop();
  return false;
  
}

function keyReleased(){
  noLoop();
}





/*function characterControls() {
  if (touchIsDown || mouseIsPressed) {
    if ((touchX < windowWidth / 2) && (touchX > 0)) {
      xPos -= 2;
    } else {
      xPos += 2;
    }
  }
}
*/