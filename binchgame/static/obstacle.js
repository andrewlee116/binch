function Obstacle(number) {
  this.x = 50; //right edge of the screen
  this.y = 50;//100;
  this.xspeed = -1;
  this.yspeed = 0;
  this.number = number;

  this.move = function() {
      this.x = this.x;// + this.xspeed * scl;
  }

  this.create = function() {
      fill(255);
      rect(this.x,(this.y)+100/this.number,20,100/this.number);
      for(i = 0; i<this.number; i++)
      {
          //var c = color(50,50,50);//random(256), random(256), random(256));
          //noStroke();
          fill(255);
          rect(this.x,(this.y)+100/this.number,20,100/this.number);
      }
  }

  this.death = function() {
      if(this.x<=0)
        delete this; //idk if this will work
  }

  /*this.randomize = function() {

  }*/

  /*this.show = function() {
    fill(255);
    ellipse(this.x, this.y, scl*4, scl*4);

    fill(150);
    textSize(20);
    wid = textWidth(this.username);
    text(username,this.x-wid/2,this.y-35,300,300);

  }*/
}
