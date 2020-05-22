
var trashR,trashL,fishR,fishL,shark;

var score = 0;
var FishLGroup;
var FishRGroup;
var gameState = "play";
var playOn,edges; 


function preload(){
  
  fishL1 = loadImage("assets2/fish1L.png");
  fishL2 = loadImage("assets2/fish2L.png");
  fishL3 = loadImage("assets2/fish3L.png");
  fishL4 = loadImage("assets2/fish4L.png");
  fishL5 = loadImage("assets2/fish5L.png");
  fishL6 = loadImage("assets2/fish6L.png");

  fishR1 = loadImage("assets2/fish1R.png");
  fishR2 = loadImage("assets2/fish2R.png");
  fishR3 = loadImage("assets2/fish3R.png");
  fishR4 = loadImage("assets2/fish4R.png");
  fishR5 = loadImage("assets2/fish5R.png");
  sharkImg = loadImage("assets2/shark.png");

  trash1Img = loadImage("assets2/trash1.png");
  trash2Img = loadImage("assets2/trash4.png");
  trash3Img = loadImage("assets2/trash5.png");
  trash4Img = loadImage("assets2/trash3.png");

  boatImg = loadImage("assets2/boat.png");
  hookImg = loadImage("assets2/hook.png");

  bgImg = loadImage("assets2/bg.jpg");

}

function setup(){
  createCanvas(innerWidth - 30,innerHeight - 30);

  boat = createSprite(innerWidth/2+500,innerHeight/4);
  boat.addImage(boatImg);
  boat.scale = innerWidth/1200;
  //boat.debug=true
  boat.setCollider("rectangle",0,0,90,100);
  hook = createSprite(innerWidth/2+1000,innerHeight/2 );
  hook.addImage(hookImg);
  hook.scale = innerWidth/10500;
  //hook.debug=true

  line1 = createSprite(innerWidth/2,innerHeight/4,innerWidth,5);
  line1.visible = false;
 
// small fish
   FishLGroup = new Group();
   FishRGroup = new Group();
// big fish   
   FishL2Group = new Group();
   FishR2Group = new Group();
   SharkGroup = new Group();
// trash
   TrashLGroup = new Group();   
   TrashRGroup = new Group();   

   this.left=createButton("Left")
   this.left.size(100,100);
   this.left.position(innerWidth-530,innerHeight-400);
   this.right=createButton("Right")
   this.right.size(100,100);
   this.right.position(innerWidth-270,innerHeight-400);
   this.up=createButton("Up")
   this.up.size(100,100);
   this.up.position(innerWidth-400,innerHeight-530);
   this.down=createButton("Down")
   this.down.size(100,100);
   this.down.position(innerWidth-400,innerHeight-270);

}

function draw(){
  background(bgImg);
  edges=createEdgeSprites();

  hook.collide(edges[3]);
  
  hook.collide(line1);
  boat.collide(edges[1]||edges[4])

  drawSprites();
  

  hook.x = boat.x - 150;
  
  stroke(7);
  line(hook.x,boat.y+30,hook.x,hook.y);
  
  if (keyCode === UP_ARROW && hook.y <innerHeight){
    hook.y-=10;
  }

  if (keyCode === DOWN_ARROW && hook.y >height/4 ){
    hook.y+=10;
  }

  

  if (keyCode === RIGHT_ARROW && boat.x < innerWidth){
    boat.x+=7;
  }

  if (keyCode === LEFT_ARROW && boat.x <innerWidth){
    boat.x-=7;
  }

  if(touches.length>0){

    this.left.mousePressed(()=>{
      boat.velocityX = -27;
      hook.velocityY = 0;
    })
   
    this.right.mousePressed(()=>{
      boat.velocityX = 27;
      hook.velocityY = 0;
    })

    this.up.mousePressed(()=>{
      hook.velocityY = -25;
      boat.velocityX = 0;
    })
      
    this.down.mousePressed(()=>{
      hook.velocityY = 25;
      boat.velocityX = 0;
    })

    touches=[]
  }

if (gameState === "play"){

  spawnFishL();
  spawnFishR();
  spawnShark();
  spawnTrashR();
  spawnTrashL();
 
  FishLGroup.overlap(hook, explosion);

function explosion(fishL) {
  fishL.remove();
  score-=10;
}
 
  FishRGroup.overlap(hook, explosion1);

  function explosion1(fishR) {
    fishR.remove();
    score-=10;
  }

  TrashLGroup.overlap(hook, explosion2);

  function explosion2(trashL) {
    trashL.remove();
    score+=10;
  }
  
  TrashRGroup.overlap(hook, explosion3);

  function explosion3(trashR) {
    trashR.remove();
    score+=10;
  }
  // hook.debug = true;
  

  if(score === 500 ){
    gameState = "goodEnd";
  }
  
  fill(0);
  textSize(60);
  text("Score : "+ score, 20,130);
  
}  

if (gameState === "goodEnd"){
  fill(0);
  textSize(100);
  text("Thank You for Cleaning the Ocean!",width/2 - 700,900);
  text("Your Score :"+ score,width/2 - 300,1100);
 
}

}
