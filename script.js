let jumpSpeed = 10;
let player;
let x = 30;
let y = 50;
let z = 30;
var rainy = 0;
let bomb;
let timer;
let rains = [];
let enemy = [];
var counter;
let dir = 1;
let score = 0;
function spawnRain()
{


    //let x = 10 + 10 * i;
    const randomSpawn = random([0, 1])

    let rainX
    let rainY
    if (randomSpawn === 0) {
      rainX = -25
      rainY = random(0, 320)
    }
    else {
      rainX = random(0, 320)
      rainY = -25
    }

    var rain = new Rain(rainX, rainY, 80, 8);
    rains.push(rain);
  


  
}

function setup() {

  createCanvas(420, 320);
  jumpPerson = new JumpPerson();
  bomb = new Bomb(x,y);
  enemy = new Enemy();
  gravity();
  //timer = createP('');
  setInterval(timeIt, 500);

  for(let i = 0; i < 30; i++)
  {
    let x = 10 + 10 * i;
    

    rains[i] = new Rain(0, random(0,320))
    
  }
  let rainTime = 20;

  let rainInterval = setInterval(spawnRain,rainTime);
   
}

function draw() {
  noStroke()
  background(60);
  fill(0);
  ellipse(x,y,30,z);
  rect(x-5,y-30,10,30);
  triangle(x+30, y-30, x-30, y-30, x, y-53);
  bomb.physics()
  
  //console.log(y)
  enemy.display();
  enemy.physicsEnemy(x,y);
  text(score, 10, 20);
    bomb.display();
    if (dist(bomb.posx, bomb.posy, enemy.x, enemy.y) <= 5) {
      console.log('hit')
      enemy = new Enemy();
      score += 100;
      //bomb = undefined;
    }
  
  rains = rains.filter((rain) => {
    rain.physics();
    
    rain.display();

    return rain.rainy < 320
  })
}
function timeIt()
{
  counter++;
}
function keyPressed()
{
   if (key == 'z' || key == 'Z') {
    bomb = new Bomb(x,y);
   }

}
function gravity(s) {
  let accel = 1.035;
  let jump = 6;
  let jumpTime = 0;
  let unoJump = 0;
  s = -4;
  setInterval(() => {
    if (y <= 300) {
      y -= s;
      s = s * accel;
      ellipse(x, y, 25);
    }
  if(unoJump == 0){

    if (keyIsDown(32)) {
      y -= jump;
    } 
    else{

      unoJump = 1;
      if(s > -4){
      s = -4;
      }
      s * 1.5;

    }
  }

    if(y > 300)
    {
      y = 300;
      s = -1;
      unoJump = 0;
    }
    if (keyIsDown(39)) {
      x += 5;
      dir = 2;
    }
    if (keyIsDown(82)) {
      
      rainTime = 10000000;
    }
    else{
      rainTime = 20;  

    }
    if (keyIsDown(37)) {
      x -= 5;
      dir = 1;
    }
    if (keyIsDown(90)){
      


    }
    if (keyIsDown(40))
    {
      z = 20;

    }
    else{
      z = 30;
    }


  }, 9)

}