var BG, snow
function preload(){
  BG = loadImage("snow1.jpg")
  snow = loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  c = createSprite(400, 300, 50, 50);
}

function draw() {
  background(BG);
  e = new Snow();
  c.x = World.mouseX
  drawSprites();
}