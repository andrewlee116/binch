var p;
var ob;
var scl = 5;

function setup() {
  createCanvas(1000, 750);
  p = new Person("Andrew");
  p2 = new Person("Silap");
  frameRate(60)
  ob = new Obstacle(random(2,4));
  ob.create();
  //make a random int
  //createObstacle(random int);
}

function draw() {
  background(61);
  //p.death();
  p.update();
  p.show();
  p2.show();
  keyStuff();
  obstacleStuff();
  ob.show();
}

function keyStuff(){
<<<<<<< HEAD
    if (keyIsDown('W'.charCodeAt(0)))
        p2.move(0, -1);
    else if (keyIsDown('S'.charCodeAt(0)))
        p2.move(0, 1);
    else if (keyIsDown('D'.charCodeAt(0)))
        p2.move(1, 0);
    else if (keyIsDown('A'.charCodeAt(0)))
        p2.move(-1, 0);
=======
    if (keyIsDown(UP_ARROW))
        p.move(0, -3);
    else if (keyIsDown(DOWN_ARROW))
        p.move(0, 3);
    else if (keyIsDown(RIGHT_ARROW))
        p.move(0, 0);
    else if (keyIsDown(LEFT_ARROW))
        p.move(0, 0);
>>>>>>> a7e527a418fca330d026adf105d9c0f90caf5d80
    else
        p2.move(0,0);
}

function obstacleStuff() {
    ob.move();
    if(ob.death())
    {
        ob = new Obstacle(random(1,6));
        ob.create();
    }
}
