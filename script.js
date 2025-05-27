'use strict';
// 1行目に記載している 'use strict' は削除しないでください

const image = new Image();
let imagePath = "imgs/24160576_resize.png";
let x = 0;
let y = 0;
let paddleX = 0;
const paddleWidth = 75;

alert("野球盤ゲーム　スタート！！");

image.addEventListener ("load", function () {
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  x = canvas.width / 2;
  y = canvas.height / 2;
  paddleX = (canvas.width - paddleWidth - 30) / 2;
  draw();
});

image.src = imagePath;


