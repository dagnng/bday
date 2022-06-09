let startImg;
let candle = [];
let cam;
let song;
let a = 0;
let wish = false;
let sing = false;
let counter = 0;

function preload() {
  startImg = loadImage("BDAY CARD-01.png");

  song = loadSound("bday_song.m4a");

  for (let i = 0; i < 5; i++) {
    candle[i] = loadImage("candles-0" + [i + 2] + ".png");
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  cam = createCapture(VIDEO);
  cam.size(377, 282);
  cam.hide();
  for (let i = 0; i < 5; i++) {
    candle[i].resize(1280, 720);
  }
}

function draw() {
  background(210,80,100);
 
  homepage();

  if (mouseIsPressed) {
    if (mouseX > 442 && mouseX < 580 && mouseY > 600 && mouseY < 625) {
      song.play();
    } else if (mouseX > 712 && mouseX < 840 && mouseY > 600 && mouseY < 625) {
      wish = true;
    }
  }
  if (wish) {
    makeWish();
  }
}
function homepage() {
  startImg.resize(1280, 720);
  image(startImg, 0, 0);
  image(cam, 452, 211);
  textAlign(LEFT);
  textSize(16);
  text("🎵", 442, 620);
  text("🎂", 714, 620);
}

function makeWish() {
  fill(0, a);
  a += 50;
  rect(0, 0, width, height);
  if (a >= 255) {
    image(candle[0], 0, 0);
  }
  if (counter == 1) {
    image(candle[1], 0, 0);
  }
  if (counter == 2) {
    image(candle[2], 0, 0);
  }
  if (counter == 3) {
    image(candle[3], 0, 0);
  }
  if (counter == 4) {
    image(candle[4], 0, 0);
  }
  if (counter == 5) {
    homepage();
    noStroke();
    fill(255, 222, 100, 30);
    rect(452, 211, 377, 282);
    push();
    angleMode(DEGREES);
    translate(600, 250);
    rotate(-20);
    fill(0);
    textAlign(CENTER);
    textSize(30);
    text("👑", 0, 0);
    pop();
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    counter++;
  }
  if (keyCode === TAB) {
    saveCanvas("24th_bday", "jpg");
  }
}
function mousePressed() {
  //song.play();
}
