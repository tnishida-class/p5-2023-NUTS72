let cx, cy, n, a; //グローバル変数として定義 cx,cy=画面の中心,n=(n+1)問目, a=答え

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
  if(n == 0){ //(1)ミャンマーa
    if(keyIsDown(" ".charCodeAt(0))){
      Myanmar();
    }else if(a == 0 && keyIsDown(UP_ARROW)){
      correct();
      a = 1
    }else if(a == 0 && (keyIsDown(DOWN_ARROW)||keyIsDown(RIGHT_ARROW)||keyIsDown(LEFT_ARROW))){
      incorrect();
      a = 1
    }else if(a == 1 && keyIsDown(SHIFT)){
      n = 1;
    }
  }else if(n == 1){ //(2)ウクライナc
    if (a == 1){
      Ukraine();
      if(keyIsDown(DOWN_ARROW)){
        correct();
        a = 2;
      }else if(keyIsDown(UP_ARROW)||keyIsDown(RIGHT_ARROW)||keyIsDown(LEFT_ARROW)) {
        incorrect();
        a = 2;
      }
    }else if(a == 2 && keyIsDown(SHIFT)){
        n = 2;
    }
  }else if(n == 2){ //(3)オーストリアb
    if(a == 2){
      Austria();
      if(keyIsDown(LEFT_ARROW)){
        correct();
        a = 3;
      }else if(keyIsDown(UP_ARROW)||keyIsDown(DOWN_ARROW)||keyIsDown(RIGHT_ARROW)){
        incorrect();
        a = 3;
      }
    }else if(a == 3 && keyIsDown(SHIFT)){
      n = 3;
    }
  }else if(n == 3){ //(4)チェコa
    if(a == 3){
      Czech();
      if(keyIsDown(UP_ARROW)){
        correct();
        a = 4;
      }else if(keyIsDown(DOWN_ARROW)||keyIsDown(RIGHT_ARROW)||keyIsDown(LEFT_ARROW)) {
        incorrect();
        a = 4;
      }
    }else if(a == 4 && keyIsDown(SHIFT)){
        n = 4;
    }
  }else if(n == 4){ //(5)シエラレオネc
    if(a == 4){
      Sierraleone();
      if(keyIsDown(DOWN_ARROW)){
        correct();
        a = 5;
      }else if(keyIsDown(UP_ARROW)||keyIsDown(RIGHT_ARROW)||keyIsDown(LEFT_ARROW)) {
        incorrect();
        a = 5;
      }
    }else if(a == 5 && keyIsDown(SHIFT)){
        n = 5;
    }
  }else if(n == 5){ //(6)スリナムb
    if(a == 5){
      Suriname();
      if(keyIsDown(LEFT_ARROW)){
        correct();
        a = 6;
      }else if(keyIsDown(UP_ARROW)||keyIsDown(DOWN_ARROW)||keyIsDown(RIGHT_ARROW)) {
        incorrect();
        a = 6;
      }
    }else if(a == 6 && keyIsDown(SHIFT)){
        n = 6;   
    }
  }else if(n == 6){ //(7)ブルキナファソd
    if(a == 6){
      BurkinaFaso();
      if(keyIsDown(RIGHT_ARROW)){
       correct();
       a = 7;
      }else if(keyIsDown(UP_ARROW)||keyIsDown(DOWN_ARROW)||keyIsDown(LEFT_ARROW)) {
       incorrect();
       a = 7;
      }
   }else if(a == 7 && keyIsDown(SHIFT)){
      n = 7;   
   }
  }else if(n == 7){ //(8)チリd
    if(a == 7){
      Chile();
     if(keyIsDown(RIGHT_ARROW)){
       correct();
       a = 8;
     }else if(keyIsDown(UP_ARROW)||keyIsDown(DOWN_ARROW)||keyIsDown(LEFT_ARROW)) {
       incorrect();
       a = 8;
     }
   }else if(a == 8 && keyIsDown(SHIFT)){
      n = 8;   
   }
  }else if(n == 8){ //(9)中央アフリカb
    if(a == 8){
      CentralAfrica();
     if(keyIsDown(LEFT_ARROW)){
       correct();
       a = 9;
     }else if(keyIsDown(UP_ARROW)||keyIsDown(DOWN_ARROW)||keyIsDown(RIGHT_ARROW)) {
       incorrect();
       a = 9;
     }
   }else if(a == 9 && keyIsDown(SHIFT)){
      n = 9;   
   }
  }else if(n == 9){ //(10)ソマリアa
    if(a == 9){
      Somalia();
     if(keyIsDown(UP_ARROW)){
       correct();
       a = 10;
     }else if(keyIsDown(LEFT_ARROW)||keyIsDown(DOWN_ARROW)||keyIsDown(RIGHT_ARROW)) {
       incorrect();
       a = 10;
     }
   }else if(a == 10 && keyIsDown(SHIFT)){
      n = 10;   
   }
  }else if(n == 10){ //(11)トルコc
    if(a == 10){
      Türkiye();
     if(keyIsDown(DOWN_ARROW)){
       correct();
       a = 11;
     }else if(keyIsDown(UP_ARROW)||keyIsDown(LEFT_ARROW)||keyIsDown(RIGHT_ARROW)) {
       incorrect();
       a = 11;
     }
   }else if(a == 11 && keyIsDown(SHIFT)){
      n = 11;   
   }
  }else if(n == 11){ //(12)北朝鮮d
    if(a == 11){
      NorthKorea();
     if(keyIsDown(RIGHT_ARROW)){
       correct();
       a = 12;
     }else if(keyIsDown(UP_ARROW)||keyIsDown(DOWN_ARROW)||keyIsDown(LEFT_ARROW)) {
       incorrect();
       a = 12;
     }
   }else if(a == 12 && keyIsDown(SHIFT)){
      n = 12;   
   }
  }else if(n == 12){ //(13)ホンジュラスa
    if(a == 12){
      Honduras();
     if(keyIsDown(UP_ARROW)){
       correct();
       a = 13;
     }else if(keyIsDown(LEFT_ARROW)||keyIsDown(DOWN_ARROW)||keyIsDown(RIGHT_ARROW)) {
       incorrect();
       a = 13;
     }
   }else if(a == 13 && keyIsDown(SHIFT)){
      n = 13;   
   }
  }else if(n == 13){ //(14)ノルウェーd
    if(a == 13){
      Norway();
     if(keyIsDown(RIGHT_ARROW)){
       correct();
       a = 14;
     }else if(keyIsDown(UP_ARROW)||keyIsDown(DOWN_ARROW)||keyIsDown(LEFT_ARROW)) {
       incorrect();
       a = 14;
     }
   }else if(a == 14 && keyIsDown(SHIFT)){
      n = 14;   
   }
  }else if(n == 14){ //(15)アイスランドb
    if(a == 14){
      Iceland();
     if(keyIsDown(LEFT_ARROW)){
       correct();
       a = 15;
     }else if(keyIsDown(UP_ARROW)||keyIsDown(DOWN_ARROW)||keyIsDown(RIGHT_ARROW)) {
       incorrect();
       a = 15;
     }
   }else if(a == 15 && keyIsDown(SHIFT)){
      n = 15;   
   }
  }else if(n == 15){ //(16)アゼルバイジャンc
    if(a == 15){
      Azerbaijan();
     if(keyIsDown(DOWN_ARROW)){
       correct();
       a = 16;
     }else if(keyIsDown(UP_ARROW)||keyIsDown(LEFT_ARROW)||keyIsDown(RIGHT_ARROW)) {
       incorrect();
       a = 16;
     }
   }else if(a == 16 && keyIsDown(SHIFT)){
      n = 16;   
   }
  }else if(n==16){
    if(a==16){ //(17)フィリピン
      Philippine();
     if(keyIsDown(UP_ARROW)){
       correct();
       a = 17;
     }else if(keyIsDown(LEFT_ARROW)||keyIsDown(DOWN_ARROW)||keyIsDown(RIGHT_ARROW)) {
       incorrect();
       a = 17
     }
   }else if(a == 17 && keyIsDown(SHIFT)){
      n = 17;   
   }
  }else if(n == 17){ //終了画面
    background(234);
    fill(0);
    textSize(80);
    text("終了！", cx, cy);
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
  text("Shiftキーで次へ", cx, cy * 6 / 5);
}

//不正解の関数
function incorrect(){
  background(234);
  fill(0,0,205);
  textSize(80);
  text("不正解…", cx, cy);
  fill(0);
  textSize(15); 
  text("Shiftキーで次へ", cx, cy * 6 / 5);
}

//(1)ミャンマーa
function Myanmar(){
  background(234);
  noStroke();
  fill(255, 210, 31);
  rect(cx - 225, 0, 450, 100); 
  fill(67, 191, 33);
  rect(cx - 225, 100, 450, 100);
  fill(242, 30, 2);
  rect(cx - 225, 200, 450, 100);
  fill(255);
  star(cx, 157, 115);

  quiz();
  textSize(30);
  option("ミャンマー(↑)", "ベトナム(←)", "ラオス(↓)", "フィリピン(→)");
}

//(2)ウクライナc
function Ukraine(){
  background(234);
  noStroke();
  fill(19, 95, 209);
  rect(cx - 225, 0, 450, 225);
  fill(252, 221, 18);
  rect(cx - 225, 150, 450, 150);

  quiz();
  textSize(30);
  option("リトアニア(↑)", "スペイン(←)", "ウクライナ(↓)", "モンテネグロ(→)");
}

//(3)オーストリアb
function Austria(){
  background(234);
  noStroke();
  fill(189, 19, 39);
  rect(cx - 225, 0, 450, 100); 
  fill(255);
  rect(cx - 225, 100, 450, 100);
  fill(189, 19, 39);
  rect(cx - 225, 200, 450, 100);

  quiz();
  textSize(30);
  option("ベルギー(↑)", "オーストリア(←)", "インドネシア(↓)", "オランダ(→)");
}

//(4)チェコa
function Czech(){
  background(234);
  noStroke();
  fill(255);
  rect(cx - 225, 0, 450, 225);
  fill(217, 9, 9);
  rect(cx - 225, 150, 450, 150); 
  fill(15, 74, 140);
  triangle(cx - 225, 0, cx - 225, 300, cx, 150);

  quiz();
  textSize(30);
  option("チェコ(↑)", "フィリピン(←)", "スロバキア(↓)", "キューバ(→)");
}

//(5)シエラレオネc
function Sierraleone(){
  background(234);
  noStroke();
  fill(30, 181, 58);
  rect(cx - 225, 0, 450, 300);
  fill(255);
  rect(cx - 225, 100, 450, 100);
  fill(0, 114, 198);
  rect(cx - 225, 200, 450, 100); 

  quiz();
  textSize(30);
  option("エルサルバドル(↑)", "ニカラグア(←)", "シエラレオネ(↓)", "ファミマ(→)");
}

//(6)スリナムb
function Suriname(){
  background(234);
  noStroke();
  fill(1, 128, 54);
  rect(cx - 225, 0, 450, 300); 
  fill(255);
  rect(cx - 225, 60, 450, 180);
  fill(168, 13, 29)
  rect(cx - 225, 90, 450, 120)
  fill(247, 211, 32);
  star(cx, 155, 59);

  quiz();
  textSize(30);
  option("カメルーン(↑)", "スリナム(←)", "セネガル(↓)", "ガーナ(→)");
}

//(7)ブルキナファソd
function BurkinaFaso(){
  background(234);
  noStroke();
  fill(239, 43, 45);
  rect(cx - 225, 0, 450, 150); 
  fill(0, 158, 73);
  rect(cx - 225, 150, 450, 150);
  fill(252, 209, 22);
  star(cx, 150, 57);

  quiz();
  textSize(30);
  option("ガーナ(↑)", "ベナン(←)", "ギニアビサウ(↓)", "ブルキナファソ(→)");
}

//(8)チリd
function Chile(){
  background(234);
  noStroke();
  fill(255);
  rect(cx - 225, 0, 450, 150); 
  fill(0, 57, 166);
  rect(cx - 225, 0, 150, 150);
  fill(255);
  star(cx - 150, 75, 37);
  fill(215, 43, 31)
  rect(cx - 225, 150, 450, 150)

  quiz();
  textSize(30);
  option("台湾(↑)", "キューバ(←)", "コスタリカ(↓)", "チリ(→)");
}

//(9)中央アフリカb
function CentralAfrica(){
  background(234);
  noStroke();
  fill(0, 48, 130);
  rect(cx - 225, 0, 450, 75); 
  fill(255);
  rect(cx - 225, 75, 450, 75);
  fill(40, 151, 40)
  rect(cx - 225, 150, 450, 75)
  fill(255, 206, 0)
  rect(cx - 225, 225, 450, 75) 
  fill(210, 16, 52)
  rect(cx - 45, 0, 80, 300) 
  fill(255, 206, 0);
  star(cx - 150, 40, 35);

  quiz();
  textSize(30);
  option("カメルーン(↑)", "中央アフリカ(←)", "コンゴ共和国(↓)", "チャド(→)");
}

//(10)ソマリアa
function Somalia(){
  background(234);
  noStroke();
  fill(65, 137, 221);
  rect(cx - 225, 0, 450, 300); 
  fill(255);
  star(cx, 150, 70);

  quiz();
  textSize(30);
  option("ソマリア(↑)", "ベトナム(←)", "モロッコ(↓)", "セネガル(→)");
}

//(11)トルコc
function Türkiye(){
  background(234);
  noStroke();
  fill(227, 10, 23);
  rect(cx - 225, 0, 450, 300); 
  fill(255)
  circle(cx - 75, 150, 154)
  fill(227, 10, 23)
  circle(cx - 57, 150, 124)
  fill(255);
  tstar(cx + 24, 150, 39);

  function tstar(cx, cy, r){ 
    beginShape(); 
      for (let i = 0; i < 5; i++){
        let theta = TWO_PI * i * 2 / 5 - 0.64;
        let x = cx + cos(theta) * r;
        let y = cy + sin(theta) * r;
        vertex(x,y);
      }
      endShape(CLOSE);
      }

  quiz();
  textSize(30);
  option("チュニジア(↑)", "パキスタン(←)", "トルコ(↓)", "シンガポール(→)");
}

//(12)北朝鮮d
function NorthKorea(){
  background(234);
  noStroke();
  fill(2, 79, 162);
  rect(cx - 225, 0, 450, 225);
  fill(255);
  rect(cx - 225, 37.5, 450, 150);
  fill(237, 28, 39);
  rect(cx - 225, 43.75, 450, 137.5); 
  fill(255)
  circle(cx - 75, 112.5, 100)
  fill(237, 28, 39);
  star(cx - 75, 112.5, 48.4375);

  quiz();
  textSize(30);
  option("中国(↑)", "台湾(←)", "ベトナム(↓)", "北朝鮮(→)");
}

//(13)ホンジュラスa
function Honduras(){
  background(234);
  noStroke();
  fill(53, 157, 222);
  rect(cx - 225, 0, 450, 75); 
  fill(255);
  rect(cx - 225, 75, 450, 75);
  fill(53, 157, 222);
  rect(cx - 225, 150, 450, 75);
  fill(53, 157, 222);
  star(cx, 112.5, 13);
  fill(53, 157, 222);
  star(cx - 50, 94, 13);
  fill(53, 157, 222);
  star(cx - 50, 131, 13);
  fill(53, 157, 222);
  star(cx + 50, 94, 13);
  fill(53, 157, 222);
  star(cx + 50, 131, 13);

  quiz();
  textSize(30);
  option("ホンジュラス(↑)", "ニカラグア(←)", "エルサルバドル(↓)", "アルゼンチン(→)");
}

//(14)ノルウェーd
function Norway(){
  background(234);
  noStroke();
  fill(239,43,45)
  rect(cx - 225,0,450,300)
  fill(255)
  rect(cx - 105,0,60,300)
  rect(cx - 225,120,450,60)
  fill(0,40,104)
  rect(cx - 90,0,30,300)
  rect(cx - 225,135,450,30)

  quiz();
  textSize(30);
  option("フィンランド(↑)", "アイスランド(←)", "デンマーク(↓)", "ノルウェー(→)");
}

//(15)アイスランドb
function Iceland(){
  background(234);
  noStroke();
  fill(2,83,156)
  rect(cx - 225,0,450,300)
  fill(255)
  rect(cx - 105,0,60,300)
  rect(cx - 225,120,450,60)
  fill(220,30,53)
  rect(cx - 90,0,30,300)
  rect(cx - 225,135,450,30)

  quiz();
  textSize(30);
  option("ノルウェー(↑)", "アイスランド(←)", "スウェーデン(↓)", "フィンランド(→)");
}

//(16)アゼルバイジャンc
function Azerbaijan(){
  background(234);
  noStroke();
  fill(0,186,229)
  rect(cx - 225,0,450,100)
  fill(238,36,54)
  rect(cx - 225,100,450,100)
  fill(61,157,50)
  rect(cx - 225,200,450,100)
  fill(255)
  circle(cx - 10,150,95)
  fill(238,36,54)
  circle(cx,150,80)
  fill(255)
  eightstar(cx + 40,150,25)

  function eightstar(cx, cy, r){
    beginShape();
    for(let i = 0; i < 8; i++){
      let theta = TWO_PI * i * 3 / 8 - HALF_PI;
      let x = cx + cos(theta) * r;
      let y = cy + sin(theta) * r;
      vertex(x,y);
    }
    endShape(CLOSE);
  }

  quiz();
  textSize(30);
  option("リビア(↑)", "トルコ(←)", "アゼルバイジャン(↓)", "ウズベキスタン(→)");
}

//(17)フィリピンa
function Philippine(){
  background(234);
  noStroke();
  fill(0,56,168)
  rect(cx - 225,0,450,112)
  fill(206,17,38)
  rect(cx - 225,112,450,112)
  fill(255)
  triangle(cx - 225,0,cx - 225,224,cx - 18,112)
  fill(252,209,22)
  philippinestar(cx - 52,112,12,0)
  philippinestar(cx - 212,27,12,0.85)
  philippinestar(cx - 212,198,12,0.35)
    
  let b = 65
  triangle(b+cx-225,112,b+cx-233,65,b+cx-217,65)
  triangle(b+cx-225,58,b+cx-233,65,b+cx-217,65)
  
  triangle(b+cx-225,112,b+cx-233,159,b+cx-217,159)
  triangle(b+cx-225,166,b+cx-233,159,b+cx-217,159)
  
  triangle(b+cx-225,112,cx-113,104,cx-113,120)
  triangle(cx-106,112,cx-113,104,cx-113,120)
  
  triangle(b+cx-225,112,cx-207,104,cx-207,120)
  triangle(cx-214,112,cx-207,104,cx-207,120)
  
  triangle(b+cx-225,112,b+33-5.5+cx-225,112-33-5.5,b+33+5.5+cx-225,112-33+5.5)
  triangle(b+cx-188,112-37,b+33-5.5+cx-225,112-33-5.5,b+33+5.5+cx-225,112-33+5.5)
  
  triangle(b+cx-225,112,b+33-5.5+cx-225,112+33+5.5,b+33+5.5+cx-225,112+33-5.5)
  triangle(b+37+cx-225,112+37,b+33-5.5+cx-225,112+33+5.5,b+33+5.5+cx-225,112+33-5.5)
  
  triangle(b+cx-225,112,b-33+5.5+cx-225,112-33-5.5,b-33-5.5+cx-225,112-33+5.5)
  triangle(b-37+cx-225,112-37,b-33+5.5+cx-225,112-33-5.5,b-33-5.5+cx-225,112-33+5.5)
  
  triangle(b+cx-225,112,b-33+5.5+cx-225,112+33+5.5,b-33-5.5+cx-225,112+33-5.5)
  triangle(b-37+cx-225,112+37,b-33+5.5+cx-225,112+33+5.5,b-33-5.5+cx-225,112+33-5.5)
  
  fill(255)
  triangle(b+cx-225,112,b-7+cx-225,50,b-4+cx-225,50)
  triangle(b+cx-225,112,b+7+cx-225,50,b+4+cx-225,50)
  
  triangle(b+cx-225,112,b-7+cx-225,175,b-4+cx-225,175)
  triangle(b+cx-225,112,b+7+cx-225,175,b+4+cx-225,175)
  
  triangle(b+cx-225,112,120+cx-225,112-6,120+cx-225,112-3)
  triangle(b+cx-225,112,120+cx-225,112+6,120+cx-225,112+3)
  
  triangle(b+cx-225,112,10+cx-225,112-6,10+cx-225,112-3)
  triangle(b+cx-225,112,10+cx-225,112+6,10+cx-225,112+3)
  
  triangle(b+cx-225,112,b+33+3+cx-225,112-33-4-3,b+33+cx-225,112-33-7)
  triangle(b+cx-225,112,b+33+4+3+cx-225,112-33-3,b+33+7+cx-225,112-33)
  
  triangle(b+cx-225,112,b+33+3+cx-225,112+33+4+3,b+33+cx-225,112+33+7)
  triangle(b+cx-225,112,b+33+4+3+cx-225,112+33+3,b+33+7+cx-225,112+33)
  
  triangle(b+cx-225,112,b-33-3+cx-225,112+33+4+3,b-33+cx-225,112+33+7)
  triangle(b+cx-225,112,b-33-4-3+cx-225,112+33+3,b-33-7+cx-225,112+33)
  
  triangle(b+cx-225,112,b-33-3+cx-225,112-33-4-3,b-33+cx-225,112-33-7)
  triangle(b+cx-225,112,b-33-4-3+cx-225,112-33-3,b-33-7+cx-225,112-33)
  
  fill(252,209,22)
  circle(b+cx-225,112,55)
  
    
  function philippinestar(cx,cy,r,a){
      beginShape();
      for(let i = 0; i < 5; i++){
        let theta = TWO_PI * i * 2/5 - a;
        let x = cx + cos(theta) * r;
        let y = cy + sin(theta) * r;
        vertex(x,y);
      }
    endShape(CLOSE)
  }


quiz();
textSize(30);
option("フィリピン(↑)","チェコ(←)", "キューバ(↓)", "ジブチ(→)");
}