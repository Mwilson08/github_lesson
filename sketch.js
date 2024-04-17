function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#cc0099");
  translate(width/2, height/2);
  fill("#FF99cc")
  stroke("#993366")
  strokeWeight(7)
  beginShape();
  for (var a = 0; a < TWO_PI; a+=0.01){
    var r = 10;
    var x = r * 16 * pow(sin(a), 3);
    var y = -r*(13 * cos(a) - 5*cos (2*a) - 2* cos(3*a) - cos(4*a));
      vertex(x,y);
  }
  endShape();
  
}