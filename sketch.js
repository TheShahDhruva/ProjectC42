function setup() {
  createCanvas(400, 400);
  new rectLine();
}

function draw() {
  background(0);  
  angleMode(DEGREES);
  translate(200, 200);
  rotate(-90);
  let hr = hour();
  let mn = minute();
  let sc = second(); 

  strokeWeight(8);
  noFill();
  
  let scAngle = map(sc, 0, 60, 0, 360);
  let mnAngle = map(mn, 0, 60, 0, 360);
  let hrAngle = map(hr%12, 0, 12, 0, 360)

  stroke(10, 180, 30);
  arc(0, 0, 260, 260, 0, scAngle);
  push();
  rotate(scAngle);
  line(0, 0, 50, 0);
  pop();


  stroke(180, 10, 30);
  arc(0, 0, 290, 290, 0, mnAngle);
  push();
  rotate(mnAngle);
  line(0, 0, 70, 0);
  pop();


  stroke(10, 30, 180);
  arc(0, 0, 320, 320, 0, hrAngle);
  push();
  rotate(hrAngle);
  line(0, 0, 100, 0);
  pop();

  stroke(0);
  ellipse(0, 0, 5, 5);
  fill(255);
  noStroke();
  rotate(90);
  translate(-200, -200);
  textSize(20);
  textFont('Times New Roman');
  if(mn < 10){
  if(sc < 10){
  if(hr > 12){
 text(hr%12 + ':' + "0" + mn + ':' + "0" + sc + " PM", 20, 20);
  } else {
    text(hr%12 + ':' + "0" + mn + ':' + "0" +  sc + " AM", 20, 20);
  }
} else {
  if(hr > 12){
    text(hr%12 + ':' + "0" + mn + ':' + sc + " PM", 20, 20);
     } else {
       text(hr%12 + ':' + "0" + mn + ':' + sc + " AM", 20, 20);
     }
}
  } else{
    if(sc < 10){
      if(hr > 12){
     text(hr%12 + ':' + mn + ':' + "0" + sc + " PM", 20, 20);
      } else {
        text(hr%12 + ':' + mn + ':' + "0" +  sc + " AM", 20, 20);
      }
    } else {
      if(hr > 12){
        text(hr%12 + ':' + mn + ':' + sc + " PM", 20, 20);
         } else {
           text(hr%12 + ':' + mn + ':' + sc + " AM", 20, 20);
         }
    }
  }
  
}
