// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  fill(0);
  const dx = width / scores.length;
  let px, py; // 線を引くために一つ前の点を覚えておく変数
  for(let i = 0; i < scores.length; i++){
    px = i * dx + 20;
    py = height * (1 - scores[i]/ 100);
    ellipse(px, py, 5);

    let pxx = (i + 1) * dx + 20;
    let pyy = height * (1 - scores[i + 1]/ 100);
   
      stroke(0);
      line(px, py, pxx, pyy); 
  
  }
}


