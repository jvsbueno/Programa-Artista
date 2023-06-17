function setup() {
  createCanvas(800, 800);
  background("light gray");
}

function draw() {
  stroke("blue");
  fill("red");

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 2, 3);
  }
}
