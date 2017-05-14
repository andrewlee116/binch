var p;
var ob;
var scl = 5;
var count = 0;
var make = true;

function setup() {
  createCanvas(1000, 750);
  p = new Person("Player 1");
  frameRate(120);
  ob = new Obstacle(random(2,8),count);
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

  if(p.lose())
  {
      clear();
      fill(150);
      textSize(50);
      var message = "YOU LOSE!!!";
      text(message,370,300,300,300);

      textSize(20);
      var mess = "ㅠ_ㅠ\t:(\t=_=\tㅜ_ㅜ \n\n Refresh the page to try again, or go back to the home page!"
      text(mess,300,450,300,300);
      noLoop();
  }
  else if(p.win())
  {
      clear();
      fill(150);
      textSize(50);
      var message = "YOU WIN!!!";
      text(message,350,300,300,300);

      textSize(20);
      var mess = ":O\t:]\t<(\")\t._. \n\n Good job!!! Refresh the page for more fun or go back to the home page!"
      text(mess,300,450,300,300);

      noLoop();
  }

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
    if(make)
        ob.makeSuccessArray();
    make = false;
    if(ob.death())
    {
        count= count + 0.25;
        ob = new Obstacle(random(1,6),count);
        ob.create();
        make = true;
    }
}
