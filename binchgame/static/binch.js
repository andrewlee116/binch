var p;
var ob;
var scl = 5;

function setup() {
  createCanvas(1000, 750);
  p = new Person("Player 1");
  frameRate(60);
  ob = new Obstacle(random(1,6));
  ob.create();
}

function draw() {
  background(61);
  //p.death();
  p.update();
  p.show();
  ob.show();

  if(ob.judgement()===true)
      p.hit(ob.returnSuccessArray());

  keyStuff();
  obstacleStuff();
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
    else
        p.move(0,0);
}

function obstacleStuff() {
    ob.move();
    ob.makeSuccessArray();
    if(ob.death())
    {
        ob = new Obstacle(random(1,6));
        ob.create();
    }
}
