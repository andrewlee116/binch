var p;
var scl = 5;

function setup() {
  createCanvas(1000, 750);
  p = new Person("Andrew");
  p2 = new Person("Silap");
  frameRate(60)
}

function draw() {
  background(60);
  //p.death();
  p.update();
  p.show();
  p2.show();
  keyStuff();
}

function keyStuff(){
    if (keyIsDown('W'.charCodeAt(0)))
        p2.move(0, -1);
    else if (keyIsDown('S'.charCodeAt(0)))
        p2.move(0, 1);
    else if (keyIsDown('D'.charCodeAt(0)))
        p2.move(1, 0);
    else if (keyIsDown('A'.charCodeAt(0)))
        p2.move(-1, 0);
    else
        p2.move(0,0);
}
