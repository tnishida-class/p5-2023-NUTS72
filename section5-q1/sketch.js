let cx, cy, n, a; //グローバル変数として定義 cx,cy=画面の中心,n=(n+1)問目, answer=答え

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(234);
  textAlign(CENTER, CENTER);

  cx = windowWidth / 2;
  cy = windowHeight / 2;
  n = 0;
  a = 0;

  // タイトル
  fill(0);
  textSize(50);
  text("国旗クイズ", cx, cy);
  textSize(15);
  text("スペースキーを押してスタート！", cx, cy * 6 / 5);
}
 
function draw(){
  if(n == 0){
    if(keyIsDown(" ".charCodeAt(0))){
      myanmar(); //(1)ミャンマー
    }else if(a == 0 && keyIsDown(UP_ARROW)){
      correct();
      a = 1
    }else if(a == 0 && (keyIsDown(DOWN_ARROW)||keyIsDown(RIGHT_ARROW)||keyIsDown(LEFT_ARROW))){
      incorrect();
      a = 1
    }else if(a == 1 && keyIsDown(SHIFT)){
      n = 1;
    }
  }else if(n == 1){
    if(a == 1){
      ukraine(); //(2)ウクライナ
    }else if(a == 1 && keyIsDown(DOWN_ARROW)){
      correct();
      a = 2;
    }else if(a == 1 && (keyIsDown(UP_ARROW)||keyIsDown(RIGHT_ARROW)||keyIsDown(LEFT_ARROW))){
      incorrect();
      a = 2;
    }else if(a == 2 && keyIsDown(SHIFT)){
      n = 2;
    }
  }else if(n == 2){
    if(a == 2){
      austria(); //(3)オーストリア
    }else if(a == 2 && keyIsDown(DOWN_ARROW)){
      correct();
      a = 3;
    }else if(a == 2 && keyIsDown(UP_ARROW)||keyIsDown(RIGHT_ARROW)||keyIsDown(LEFT_ARROW)){
      incorrect();
      a = 3;
    }else if(a == 3 && keyIsDown(SHIFT)){
      n = 3;
  }
  }
}








      



//星型の関数
function star(sx, sy, r){
  beginShape(); 
    for (let i = 0; i < 5; i++){
      let theta = TWO_PI * i * 2 / 5 - HALF_PI;
      let x = sx + cos(theta) * r;
      let y = sy + sin(theta) * r;
      vertex(x,y);
    }
    endShape(CLOSE);
    } 

//問題文の関数
function quiz(){ 
    fill(0);
    textSize(25);
    text("Q. どこの国の国旗でしょう？", cx, cy);
    textSize(15);
    text("矢印キーで解答してください", cx, cy + textAscent() + textDescent() + 20);
}
    
//選択肢1個の関数
function optionbox(t, x, y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 4;
  fill(180);
  noStroke();
  rect(x - textWidth(t) / 2 - p, y - h / 2, w + p * 2, h + p);
  fill(0);
  textSize(30);
  text(t, x, y);
}

//選択肢全体の関数
function option(a,b,c,d){
  optionbox(a, cx, cy * 3 / 2 - 50);
  optionbox(b, cx / 2, cy * 3 / 2);
  optionbox(c, cx, cy * 3 / 2 + 50);
  optionbox(d, cx * 3 / 2, cy * 3 / 2);
}

//正解の関数
function correct(){
  background(234);
  fill(139,0,0);
  textSize(80);
  text("正解", cx, cy);
  fill(0);
  textSize(15); 
  text("Shiftキーで次の問題へ", cx, cy * 6 / 5);
}

//不正解の関数
function incorrect(){
  background(234);
  fill(0,0,205);
  textSize(80);
  text("不正解…", cx, cy);
  fill(0);
  textSize(15); 
  text("Shiftキーで次の問題へ", cx, cy * 6 / 5);
}

//選択したboxの色を変える関数
function change(){
  
}

//(1)ミャンマー
function myanmar(){
  background(234);
  noStroke();
  fill(255, 210, 31);
  rect(0, 0, 450, 100); 
  fill(67, 191, 33);
  rect(0, 100, 450, 100);
  fill(242, 30, 2);
  rect(0, 200, 450, 100);
  fill(255);
  star(225, 157, 115);

  quiz();
  textSize(30);
  option("ミャンマー(↑)", "ベトナム(←)", "ラオス(↓)", "フィリピン(→)"); //選択肢
}

//(2)ウクライナ
function ukraine(){
  background(234);
  noStroke();
  fill(19, 95, 209);
  rect(0, 0, 450, 225);
  fill(252, 221, 18);
  rect(0, 150, 450, 150);

  quiz();
  textSize(30);
  option("リトアニア(↑)", "スペイン(←)", "ウクライナ(↓)", "モンテネグロ(→)"); //選択肢
}

//(3)オーストリア
function austria(){
  background(234);
  noStroke();
  fill(189, 19, 39);
  rect(0, 0, 450, 100); 
  fill(255);
  rect(0, 100, 450, 100);
  fill(189, 19, 39);
  rect(0, 200, 450, 100);

  quiz();
  textSize(30);
  option("ベルギー(↑)", "オーストリア(←)", "インドネシア(↓)", "オランダ(→)"); //選択肢
}
