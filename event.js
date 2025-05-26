'use strict';

function keyDownHandler(e) {
  if (e.key === "Up" || e.key === "ArrowUp") {
    upPressed = true;
  } 
  // console.log(rightPressed, leftPressed);
}

function keyUpHandler(e) {
  if (e.key === "Up" || e.key === "ArrowUp") {
    upPressed = false;
  }
}

// function mouseMoveHandler(e) {
//   const relativeX = e.clientX - canvas.offsetLeft;
//   if (relativeX > 0 && relativeX < canvas.width) {
//     paddleX = relativeX - paddleWidth / 2;
//   }
// }

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
// document.addEventListener("mousemove", mouseMoveHandler, false);