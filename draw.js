'use strict';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");        
let ball = 0;
let strike = 0;
let out = 0;
// const image = new Image();
const paddleHeight = 10;
// const paddleWidth = 75;
let dx = 0;
let dy = 2;
const ballRadius = 10;
let score = 0;
let batAngle = 0;
// let imagePath = "imgs/24160576_resize.png";
// image.addEventListener ("load", function () {
//   // image.width = 400;
//   // image.height = 400;
//   canvas.width = image.naturalWidth;
//   canvas.height = image.naturalHeight;
//   // canvas.width = 400;
//   // canvas.height = 400;
//   // ctx.drawImage(image, 0, 0);
//   // console.log("load!");
//   console.log(canvas.width);
//   console.log(canvas.height);
// });
// console.log(canvas.width);
// console.log(canvas.height);
// image.src = imagePath;
// // image.width = 400;
// // image.height = 400;
// // ctx.drawImage(image, 0, 0);
// let x = 0;
// let y = 0;
// let paddleX = (canvas.width - paddleWidth) / 2;

// function setImage() {
//   let imagePath = "imgs/24160576_resize.png";
//   image.addEventListener ("load", function () {
//     canvas.width = image.naturalWidth;
//     canvas.height = image.naturalHeight;
//   });
//   image.src = imagePath;
//   // ctx.drawImage(image, 0, 0);
//   // x = canvas.width / 2;
//   // y = canvas.height /2;
// }

// function drawImg() {
//   ctx.drawImage(image, 0, 0);
// }

// drawStudiam(imagePath);
// function drawStudiam () {
//   let imagePath = "imgs/24160576_resize.png";
//   // console.log("draw");
//   // const image = new Image();
//   image.addEventListener ("load", function () {
//     // image.width = 400;
//     // image.height = 400;
//     canvas.width = image.naturalWidth;
//     canvas.height = image.naturalHeight;
//     // canvas.width = 400;
//     // canvas.height = 400;
//     // ctx.drawImage(image, 0, 0);
//     // console.log("load!");
//   });
//   image.src = imagePath;
//   // image.width = 400;
//   // image.height = 400;
//   ctx.drawImage(image, 0, 0);
//   x = canvas.width / 2;
//   y = canvas.height /2;
//   paddleX = (canvas.width - paddleWidth) / 2;
// }

function drawScore() {
  ctx.font = "32px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(`Score: ${score}`, 20, canvas.height - 30);
}

function drawCounts() {
  ctx.font = "32px Arial";
  // ctx.fillStyle = "#0095DD";
  ctx.fillStyle = "white";
  ctx.fillText(`B: ${ball}`, canvas.width - 80, canvas.height - 90);
  ctx.fillText(`S: ${strike}`, canvas.width - 80, canvas.height - 60);
  ctx.fillText(`O: ${out}`, canvas.width - 83, canvas.height - 30);
}

function drawBall() {
  ctx.beginPath();
  // ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

// function drawPaddle() {
  //   ctx.beginPath();
  //   ctx.rect(paddleX, canvas.height - (paddleHeight + 30), paddleWidth, paddleHeight);
  //   ctx.fillStyle = "#0095DD";
  //   ctx.fill();
  //   ctx.closePath();
  //}

function drawBat() {
  ctx.beginPath();
  const width = 490;
  const height = canvas.height - 205;
  const angle = -(Math.PI / 180) * batAngle;
  ctx.translate(width, height);
  ctx.rotate(angle);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, paddleHeight, paddleWidth);
  // ctx.fill();
  ctx.rotate(-angle);
  ctx.translate(-width, -height);
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

function positionFielding(positionX, positionY, fieldRadius) {
  // bricks[c][r].x = brickX;
  // bricks[c][r].y = brickY;
  ctx.beginPath();
  ctx.arc(positionX, positionY, fieldRadius, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}

function positionButter(positionX, positionY, fieldRadius) {
  // bricks[c][r].x = brickX;
  // bricks[c][r].y = brickY;
  ctx.beginPath();
  ctx.arc(positionX, positionY, fieldRadius, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
}

function drawFielding() {
  const fieldRadius = 15;
  const catcher = positionFielding((canvas.width - (fieldRadius / 2)) / 2, canvas.height - 140, fieldRadius);
  const center = positionFielding((canvas.width - (fieldRadius / 2)) / 2, 80, fieldRadius);
  const right = positionFielding(canvas.width - 200, 150, fieldRadius);
  const left = positionFielding(200, 150, fieldRadius);
  const picher = positionFielding((canvas.width - (fieldRadius / 2)) / 2, canvas.height - 410, fieldRadius);
  const first = positionFielding(canvas.width - 380, canvas.height - 410, fieldRadius);
  const second = positionFielding(canvas.width - 410, canvas.height - 550, fieldRadius);
  const short = positionFielding(410, canvas.height - 550, fieldRadius);
  const third = positionFielding(380, canvas.height - 410, fieldRadius);
  const batter = positionButter(480, canvas.height - 205, fieldRadius);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0);
  // drawStudiam();
  // drawBricks();
  drawFielding();
  drawBall();
  drawBat();
  drawScore();
  drawCounts();
  // hitBall();
  // collisionBat();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  // if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  //   dy = -dy;
  // }
  if (y + dy < ballRadius) {
    // dy = -dy;
    alert("ヒット！！");
    y = canvas.height / 2;
    dy = -dy;
  // } else if (y + dy > canvas.height - ballRadius) {
  } else if (y + dy > (canvas.height - 140)) {
    // if (x > paddleX && x < paddleX + paddleWidth) {
      // dy = -dy;
    // } else {
      strike++;
      if (strike === 3) {
        out++;
        strike = 0
      }
      if (out === 3) {
        out = 0;
        alert("GAME OVER");
        document.location.reload();
        // clearInterval(interval); // クロームがゲームを終了するのに必要
      } else {
        // x = canvas.width / 2;
        y = canvas.height / 2;
        // dx = 2;
        // dy = -2;
        // paddleX = (canvas.width - paddleWidth) / 2;
      }
    // }
  } 

  if (upPressed) {
    batAngle = Math.min(batAngle + 20, 180);
    collisionBat();
  } else {
    batAngle = 0;
  }
  
  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}