function Obstacle(number,count) {
  this.x = 700; //right edge of the screen
  this.y = 375;
  this.xspeed = max(-1-count,-10);
  this.yspeed = 0;
  this.number = number;
  this.blocks = [];
  this.successArr = [];

  this.move = function() {
      this.x = this.x + this.xspeed * scl;
  }

  this.create = function() {
      for(i = 0; i<this.number; i++)
      {
          var c = color(0, 0, 0);
          this.blocks[i] = c;
          noStroke();
          fill(c);
          rect(this.x+300,(750/(this.number))*(i),10,750/this.number);
      }
  }

  this.death = function() {
      if(this.x<=-265)
      {
          delete this;
          return true;
      }
      return false;
  }

  this.judgement = function() {
      if(this.x<=-260)
          return true;
      else
          return false;
  }

  //returns an array with the indices of blocks that are success blocks
  this.makeSuccessArray = function() {
      var tempArr = [];
      var returnArr = [];

      for(t = 0; t<this.blocks.length; t++)
          tempArr[t] = t;
      var tempRand = random(1,this.blocks.length+1);

      for(k = 1; k<=tempRand; k++)
      {
          shuffle(tempArr,[true]);
          returnArr[k-1]=(tempArr[tempArr.length-1]);
          shorten(tempArr);
      }

      var temp = this.blocks.length;
      append(returnArr,temp);
      shuffle(returnArr,[true]);
      this.successArr = returnArr;
  }

  this.returnSuccessArray = function() {
      return this.successArr;
  }


  this.show = function() {
    for(j = 0; j<this.blocks.length; j++)
    {
        noStroke();
        var temp = this.blocks[j];
        fill(temp);
        rect(this.x+300,(750/(this.blocks.length)*(j)),10,750/this.blocks.length);
    }

    for(z = 0; z<this.successArr.length-1;z++)
    {
        var c = color(255,255,255);
        noStroke();
        fill(c);
        rect(this.x+300,(750/(this.blocks.length))*(this.successArr[z]),10,750/this.blocks.length);
    }

}
}
