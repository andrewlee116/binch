function Person(username) {
  this.x = 50;
  this.y = 50;
  this.xspeed = 0;
  this.yspeed = 0;
  this.username = username;
  this.points = "0 points";

  this.move = function(xspeed, yspeed) {
    this.xspeed = xspeed;
    this.yspeed = yspeed;
  }

  this.death = function() {
      //todo
  }

  this.update = function() {
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 6, width - scl-6);
    this.y = constrain(this.y, 6, height - scl-6);
  }

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, scl*4, scl*4);

    fill(150);
    textSize(20);
    wid = textWidth(this.username);
    text(this.username,this.x-wid/2,this.y-35,300,300);

    fill(150);
    textSize(15);
    text(this.points,this.x-wid/2,this.y-53,300,300);
  }


}
