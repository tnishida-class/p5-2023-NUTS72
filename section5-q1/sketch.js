// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 100, 100);
}

function balloon(t, x, y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 4;
  fill(150);
  noStroke();
  rect(x, y, w + p * 2, h + p * 2);
  triangle(x, y + h + p * 2, x + 6, y + h + p * 2, x, y + h + p * 2 + 20);
  fill(0);
  text(t, x + 3, y + h);
 }
