class Enemy {
  constructor(x, y) 
  {
  this.r = round(random(1,2));
  console.log(this.r);
  if (this.r == 1)
  {
  this.x = 375;
  }
  else {
  this.x = 0;
  }
  this.y = 300;
  }
  physicsEnemy(playerX, playerY){
    if (playerX < this.x) {
      this.x += -1;
    } else if (playerX > this.x) {
      this.x += 1;
    }  


    
  }
  display() {
  fill(100);
  ellipse(this.x,this.y,30);
  
    
  }
}