class Rain {
  constructor(rainx, rainy, posx, posy) {
    this.rainx = rainx;
    this.rainy = rainy;
    this.posx = posx;
    this.posy = posy;

  }

  physics() {
    if (!keyIsDown(82)) {
      if (keyIsDown(39)) {
        this.rainx -= 1;
      }

      else {
        this.rainx += 8;
      }
      if (keyIsDown(37)) {
        this.rainx += 2;

      }
      else{
        this.rain +=8;
      }


      this.rainy += 6;
    }
  }

  display() {
    fill(144, 153, 161)
    translate(this.rainx, this.rainy)
    rotate(PI / 4.0);
    rect(0, 0, 30, 8);
    rotate(-PI / 4.0)
    translate(-this.rainx, -this.rainy)
  }
}
