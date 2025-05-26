'use strict';

// let score = 0;
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
// const canvas = document.getElementById("canvas");        
let imagePath = "imgs/24160576_resize.png";
let ball = 3;
let strike = 2;
let out = 2;
const image = new Image();
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = 0;
// let x = canvas.width / 2;
// let y = canvas.height /2;
let x = 0;
let y = 0;
let dx = 0;
let dy = 2;
const ballRadius = 10;

// drawStudiam(imagePath);
function drawStudiam (imagePath) {
  // console.log("draw");
  // const image = new Image();
  image.addEventListener ("load", function () {
    // image.width = 400;
    // image.height = 400;
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    // canvas.width = 400;
    // canvas.height = 400;
    // ctx.drawImage(image, 0, 0);
    // console.log("load!");
  });
  image.src = imagePath;
  // image.width = 400;
  // image.height = 400;
  ctx.drawImage(image, 0, 0);
  x = canvas.width / 2;
  y = canvas.height /2;
  paddleX = (canvas.width - paddleWidth) / 2;
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`Score: ${score}`, 8, 20);
}

function drawCounts() {
  ctx.font = "32px Arial";
  // ctx.fillStyle = "#0095DD";
  ctx.fillStyle = "white";
  ctx.fillText(`B: ${ball}`, canvas.width - 100, canvas.height - 90);
  ctx.fillText(`S: ${strike}`, canvas.width - 100, canvas.height - 60);
  ctx.fillText(`O: ${out}`, canvas.width - 100, canvas.height - 30);
}

function drawBall() {
  ctx.beginPath();
  // ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

// function drawPaddle() {
  //   ctx.beginPath();
  //   ctx.rect(paddleX, canvas.height - (paddleHeight + 30), paddleWidth, paddleHeight);
  //   ctx.fillStyle = "#0095DD";
  //   ctx.fill();
  //   ctx.closePath();
  //}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - (paddleHeight + 200), paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

// function drawBricks() {
//   for (let c = 0; c < brickColumnCount; c++) {
//     for (let r = 0; r < brickRowCount; r++) {
//       if (bricks[c][r].status === 1) {
//         const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
//         const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
//         bricks[c][r].x = brickX;
//         bricks[c][r].y = brickY;
//         ctx.beginPath();
//         ctx.rect(brickX, brickY, brickWidth, brickHeight);
//         ctx.fillStyle = "#0095DD";
//         ctx.fill();
//         ctx.closePath();
//       }
//     }
//   }
// }

function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status === 1) {
        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawStudiam(imagePath);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawCounts();
  collisionDetection();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  // if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  //   dy = -dy;
  // }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      lives--;
      if (!lives) {
        alert("GAME OVER");
        document.location.reload();
        // clearInterval(interval); // クロームがゲームを終了するのに必要
      } else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 2;
        dy = -2;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  } 

  if (rightPressed) {
    paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
  } else if (leftPressed) {
    paddleX = Math.max(paddleX - 7, 0);
  }
  
  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}