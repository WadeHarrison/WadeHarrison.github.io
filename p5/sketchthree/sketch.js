var xPos = 0;
var yPos = 400;
var starRad = 100;
var rocketTopy1=289;
var rocketTopy2=289;
var rocketTopy3=257;
var rocketBodyy=350;
var rFiny1=400;
var rFiny2=335;
var rFiny3=385;
var flamey1=349;
var flamey2=385;

function setup() {
  createCanvas(1500,1000)
 }


draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    noStroke();
    ellipse(xPos, yPos, starRad, starRad); //star
    
    xPos+=1;
    yPos-=1;
    starRad-=1/4;

    
    //rocket ship
    noStroke();
    fill(255, 0, 0);
    rect(336,rocketBodyy,30,-63);//roketBody
   fill(32, 230, 230);
    triangle(369,rocketTopy1,333,rocketTopy2,350,rocketTopy3);//rocketTop
    fill(32, 230, 230);
    triangle(339,rFiny1,344,rFiny2,321,rFiny3);//RightFin
    
    triangle(366,rFiny1,359,rFiny2,384,rFiny3);//leftFin
    rocketBodyy-=1;
    rocketTopy1-=1;
    rocketTopy2-=1;
    rocketTopy3-=1;
    
    rFiny1-=1;
    rFiny2-=1;
    rFiny3-=1;
    
    //rocket flame
    stroke(214, 169, 54);
    strokeWeight(3);
    line(349,flamey1,347,flamey2);
    line(354,flamey1,357,flamey2);
    line(345,flamey1,339,flamey2);
    line(360,flamey1,364,flamey2);
    
    flamey1-=1;
    
    //stary night
   strokeWeight(5);
    point(66,147);
    point(79,214);
    point(151,216);
    point(173,175);
    point(205,148);
    point(248,130);
    point(281,127);
    point(316,133);
    stroke(255, 255, 255);
    point(121,110);
    point(154,66);
    point(37,248);
    point(254,200);
    point(286,62);
    point(35,60);
    point(384,125);
    point(298,248);
    point(141,200);
    point(316,133);
    strokeWeight(1);
    line(66,147,79,214);
    line(79,214,151,216);
    line(151,216,173,175);
    line(173,175,205,148);
    line(205,148,248,130);
    line(248,130,281,127);

//interactive
if (mouseIsPressed){
  draw(starRad)

}


};


