
// p = point
let p = {}
let pSize = 10;
let speed = 20;
let theta;
function setup() {
  createCanvas(innerWidth, innerHeight);
  // for random distribution
  // only execute draw once
  noLoop();
  // draw rectangle from centre
  rectMode(CENTER);
  // angular movement 
  // assign a random angle in radians
  theta = random(TAU)
  // assign position of notional point p to middle of screen
  p = {x:width/2, y:height/2}
}

function draw() {
  background(220);

  // mapping
  ////////////////
  /* noFill()
   let c = map(mouseY, 0, height, 0, 255)
   rect(100, 100, 500, 100)
   fill(c, 0, 0)
   // width is only available after createCanvas has been called
   let w = map(mouseX, 0, width, 0, 500)
   rect(100, 100, w, 100)*/
  ////////////////
  // random distribution
  ////////////////
  noStroke();
  // rgba 
  fill(35, 56, 60, 25);
  const size = 20;
  for(let i = 0; i < 1000; i++){
    let x = random(size/2, width - size/2);
    let y = random(size/2, height - size/2)
    square(x, y, size)
  } 
    ////////////////
  // gaussian distribution
  ////////////////
 /* noStroke();
  // rgba 
  const size = 20;
  let x,y;
  for(let i = 0; i < 10000; i++){
    // layer 1 
    x = randomGaussian(width/2, 150)
    y = randomGaussian(height/2, 150)
    fill(255, 0, 0, 5);
    square(x, y, size*3)
    // layer 2
    x = randomGaussian(width/2, 100)
    y = randomGaussian(height/2, 100)
    fill(0, 255, 0, 10)
    square(x, y, size*2)
    // layer 3
    x = randomGaussian(width/2, 50)
    y = randomGaussian(height/2, 50)
    fill(0, 0, 255, 50)
    square(x, y, size)
  } */

  ////////////////
  // radians
  ////////////////

  // TAU = 2 * PI (the number of radians in a circle)
  // arc(width/2, height/2, 400, 400, 0, random(TAU))

  ////////////////
  // angular velocity
  ////////////////
  // p.x += cos(theta) * speed;
  // p.y += sin(theta) * speed;
  // circle(p.x, p.y, pSize)
  ////////////////

  ////////////////
 /* // angle from position
  ////////////////
  // difference between object and target on Y axis
  let dy = mouseY - p.y;
  // difference between object and target on X axis
  let dx = mouseX - p.x;
  // calculaeete the angle between 
  theta = atan2(dy, dx);
  p.x += cos(theta) * speed;
  p.y += sin(theta) * speed;
  circle(p.x, p.y, pSize);
  */

  ////////////////
  // use cos and sin to draw a circle
  ////////////////
  /*// define radius of the circle
  const r = 200;
  //initially set angle as t = 0
  //loop through 2 * PI, adding a little to each time
  for(let t = 0; t < TAU; t += 0.2) {
    // multiply first
    // division  next 
    let x = (sin(t) * r) + width/2;
    let y = (cos(t) * r) + height/2;
    circle(x, y, 5);
  } */

    
}

// NOTES
/*
Grid art generative project idea: 
- on load, dots are filling the screen like a wave
- each dot is a size of 1 or 2 px
- dots on the screen (RGB or black and white), it's the interactive canvas user can draw on it
- when clicking on a single dot, it becomes bigger/darler/colour change/
  or clicking and sliding will attract he nearby dots making an effect of a drawn line (a part of a drawing)
- user can click on dotes/slides through them to draw something

Useful pages:
https://medium.com/design-bootcamp/grid-explorations-in-generative-art-157cfde976a4
https://p5js.org/sketches/2215583/
https://www.vectorstock.com/royalty-free-vectors/synthwave-pink-purple-vectors


Grid art generative project idea 2: 
- 2D/ 3D grid retro animation inspired by 80s cyberpunk art
- the glithy parts of the animation
- RGB colours (mainly blue and pink/purple)
- animation giving a vibe of time travelling to the past times
*/