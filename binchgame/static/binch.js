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
    if (keyIsDown(UP_ARROW))
        p.move(0, -1);
    else if (keyIsDown(DOWN_ARROW))
        p.move(0, 1);
    else if (keyIsDown(RIGHT_ARROW))
        p.move(1, 0);
    else if (keyIsDown(LEFT_ARROW))
        p.move(-1, 0);
    else
        p.move(0,0);
}
