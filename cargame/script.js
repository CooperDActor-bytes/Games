const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const carWidth = 30;
const carHeight = 20;
let carX = canvas.width / 2 - carWidth / 2;
let carY = canvas.height - carHeight;
const carSpeed = 5;

let leftPressed = false;
let rightPressed = false;

function drawCar() {
  ctx.fillStyle = 'red';
  ctx.fillRect(carX, carY, carWidth, carHeight);
}

function drawRoad() {
  ctx.fillStyle = 'gray';
  ctx.fillRect(0, canvas.height - 50, canvas.width, 50);
}

function keyDownHandler(e) {
  if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  } else if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  } else if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRoad();
  drawCar();

  if (leftPressed && carX > 0) {
    carX -= carSpeed;
  } else if (rightPressed && carX < canvas.width - carWidth) {
    carX += carSpeed;
  }

  requestAnimationFrame(draw);
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

draw();
