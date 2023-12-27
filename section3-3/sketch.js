let x, y;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height-25;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 50);
  if(keyIsDown(LEFT_ARROW)){ x -= 3; }
  if(keyIsDown(RIGHT_ARROW)){ x += 3; }
  if(keyIsDown(LEFT_ARROW) && keyIsDown(UP_ARROW)){ x -= 6; }
  if(keyIsDown(RIGHT_ARROW) && keyIsDown(UP_ARROW)){ x += 6 }
  }

  

// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

