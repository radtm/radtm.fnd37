let upPressed = false;
let hit = false;
let rightPressed = false;
let leftPressed = false;
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
// let score = 0;
// let lives = 3;

const bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

function collisionPaddle() {
if (
  x > paddleX &&
  x < paddleX + paddleWidth &&
  y > canvas.height - (paddleHeight + 30) &&
  y < canvas.height - (paddleHeight + 30) + paddleHeight
) {
  dy = -dy;
}
}

// function collisionBat() {
//   // if (y > canvas.height - 140 && y < canvas.height - 240 &&
//   //   upPressed === true) {
//   //   dy = -dy;
//   if (170 > batAngle && batAngle > 80) {
//     if (canvas.height - 300 < (y + dy) && (y + dy) < canvas.height - 260) {
//       console.log(canvas.height - 290, (y + dy))
//       // hit = true;
//       dx = -2;
//     } else if (canvas.height - 140 < (y + dy) && (y + dy) < canvas.height - 200) { 
//       dx = 2;
//     }
//     dy = -dy
//   }
// }

function collisionBat() {
  if (upPressed) {
    if (((canvas.height / 2) + 100) < (y + dy)){
      dy = -(Math.abs(dy));
      console.log(y + dy);
    }
  }
}

function hitBall() {
  if (hit === true) {
    dy++;
  }
}

function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];
      if (b.status === 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score++;
          if (score === brickRowCount * brickColumnCount) {
            alert("YOU WIN, CONGRATULATIONS!");
            document.location.reload();
            clearInterval(interval); // Needed for Chrome to end game
          }
        }
      }
    }
  }
}

// function moveBall() {
//   if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
//     dx = -dx;
//   }
//   if (y + dy < ballRadius) {
//     dy = -dy;
//   } else if (y + dy > canvas.height - ballRadius) {
//     if (x > paddleX && x < paddleX + paddleWidth) {
//       dy = -dy;
//     } else {
//       lives--;
//       if (!lives) {
//         alert("GAME OVER");
//         document.location.reload();
//         // clearInterval(interval); // クロームがゲームを終了するのに必要
//       } else {
//         x = canvas.width / 2;
//         y = canvas.height - 30;
//         dx = 2;
//         dy = -2;
//         paddleX = (canvas.width - paddleWidth) / 2;
//       }
//     }
//   }
// }