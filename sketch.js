var hour = hour();
var minute = minute();
var second = second();

function setup() {
  createCanvas(800,800);
}

function draw() {
  background("black");
  angleMode(DEGREES);

  hourAngle = map(hour,0,60,0,360);
  
  minuteAngle = map(minute,0,60,0,360);

  secondAngle = map(second,0,60,0,360);

  push();
  rotate(secondAngle);
  stroke("purple");
  strokeWeight(7);
  line(400,400,450,450);

  stroke("yellow");
  strokeWeight(7);
  line(400,400,460,400);

  stroke("pink");
  strokeWeight(7);
  line(400,400,300,390);
  pop();

  //arc(50, 55, 50, 50, 0, HALF_PI);
  noFill();
  stroke("red");
  strokeWeight(3);
  arc(400, 400, 250, 250, PI/4, PI/7, PIE);

   noFill();
   arc(400, 400, 230, 230, PI/4, PI/7, PIE);

  // fill("blue");
  // arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);

  drawSprites();
}