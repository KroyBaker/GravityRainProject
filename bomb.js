class Bomb
  {
    constructor(posx,posy)
    {
      this.show = 10;
      this.posx = posx;
      this.posy = posy;
      this.velx = 5;
      this.vely = 8;
      this.g = 1.02;
    }
    physics(){
     
     // console.log();
      fill(255);
       if (this.posy <= 300){
       if(dir == 2)
       {       
       this.posx += this.velx;
       this.g = this.g * 1.11
       this.posy -=  this.vely - this.g;


       }
       else if(dir == 1)
       { 
        this.posx -= this.velx;

          this.g = this.g * 1.11
        
          this.posy +=  -this.vely +this.g;
       }
      

       }
      
      circle(this.posx,this.posy,10);
      //this.velx = this.g * this.posx^2 + this.posx;
      
      
    }
    display()
    {
    }

  }