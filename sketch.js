const particleSpeed = 0;
const canvWidth = 800;
const canvHeight = 800;
let isMouseHeld = false;

const myh1 = document.getElementById("h1amount");

allParticles = [];

class SandParticle{
  constructor(x,y){
    this.pos = createVector(x,y);
  }

  update(){
    if (this.pos.y <= canvHeight - 11){
      this.pos.y += 5;
    }
  }

  display(){
    rect(this.pos.x, this.pos.y, 10, 10);
    noStroke();
    fill(255,0,0);
    
  }
}

function mousePressed(){
  mouseX = mouseX;
  mouseY = mouseY;
  if (mouseX >= 0 && mouseX <= canvWidth && mouseY >= 0 && mouseY <= canvHeight) {
    allParticles.push(new SandParticle(mouseX, mouseY));
  }
}

function mouseDragged() {
  mouseX = mouseX;
  mouseY = mouseY;
  if (mouseX >= 0 && mouseX <= canvWidth && mouseY >= 0 && mouseY <= canvHeight) {
    allParticles.push(new SandParticle(mouseX, mouseY));
  }
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(50,255,200);
  if(isMouseHeld){
    let x = mouseX;
    let y = mouseY;
    allParticles.push(new SandParticle(x, y));
  }
  for (let particle of allParticles){
    particle.update();
    particle.display();
  }

  if (myh1) {
    myh1.textContent = "Amount of Squares: " + allParticles.length;
  } else {
    console.error("Element with id 'h1amount' not found");
  }
}