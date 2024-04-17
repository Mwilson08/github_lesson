let size = 70; let offset = 5; let cols; let rows;
let pacmans = [];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  
  cols = width/size;
  rows = height/size;
  
  for (let i=0; i<cols; i++) {
    pacmans[i] = [];
    for (let j=0; j<rows; j++) {
      let startingAngle;
      if (j%2 == 0) {
        if (i%2 == 0) {
          startingAngle = 90; 
        } else {
          startingAngle = 180;
        }
      } else {
        if (i%2 == 0) {
          startingAngle = 0;
        } else {
          startingAngle = 270;
        }
      }
      pacmans[i][j] = new Pacman(i*size + size/3, j*size + size/3, startingAngle);
    }
  }

}

function draw() {
  background(200, 100, 220);
  for (let i=0; i<cols; i++) {
    for (let j=0; j<rows; j++) {
      pacmans[i][j].display();
      pacmans[i][j].move();
    }
  }
}
