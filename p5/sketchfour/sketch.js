
function setup() {
  // put setup code here
  createCanvas(1000,1500);
  background(120,120,120);
  
}


function draw() {
  // put drawing code here

 if (mouseIsPressed){
   strokeWeight(6);
   stroke(89,187,243);
   line(mouseX,mouseY,mouseX,mouseY);}
else {
   stroke(0);
 }


}