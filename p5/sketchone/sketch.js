function setup() {
  createCanvas(1500,1000);
}

function draw() {
  if (mouseIsPressed) {
  fill(89,187,243);
  
  }
  else{
  fill(mouseX/2,mouseY*2,mouseY/2);
  }
  ellipse(mouseX,mouseY,20,20);
}