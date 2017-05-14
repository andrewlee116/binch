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
    if (keyIsDown(UP_ARROW))
        p.move(0, -3);
    else if (keyIsDown(DOWN_ARROW))
        p.move(0, 3);
    else if (keyIsDown(RIGHT_ARROW))
        p.move(0, 0);
    else if (keyIsDown(LEFT_ARROW))
        p.move(0, 0);
}

function obstacleStuff() {
    ob.move();
    if(ob.death())
    {
        ob = new Obstacle(random(1,6));
        ob.create();
    }
}
