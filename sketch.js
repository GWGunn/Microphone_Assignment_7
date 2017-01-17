function setup() {
  createCanvas(360,640);
  mic = new p5.AudioIn();
  mic.start();
}

function preload() {
  myBackground = loadImage("Image/SantaSings.png")
}

function draw() {
  var volume = mic.getLevel();
  
  //If the volume is not enought, re-map it (set a higher newMax).
  var newMax = 5;
  volume = map(volume,0,1,0,newMax);
  
  background(myBackground);
  fill(0)
  var size = map(volume,0,1,30,85);
  ellipse(250,270,size)
  var z = map(volume,0,1,20,75)
  ellipse(100,250,z)
  var s = map(volume,0,1,10,100)
  rect(80,480,200,s)
  fill(255,0,0)
  rect(155,480,50,s-10)
  
}