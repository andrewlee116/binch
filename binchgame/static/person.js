function Person(username) {
  this.x = 50;
  this.y = 50;
  this.xspeed = 0;
  this.yspeed = 0;
  this.username = username;

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

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, scl*4, scl*4);
    fill(150);
    textSize(20);
    wid = textWidth(this.username);
    text(username,this.x-wid/2,this.y-35,300,300);

  }
}