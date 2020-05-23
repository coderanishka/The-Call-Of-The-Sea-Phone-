// Please note that this game will only work properply on a mobile, not on a computer.
// But the other link will work properly on a computer, not on a mobile.


var form1;

function preload(){
    bgImg = loadImage("bg.jpg")
    game1Img = loadImage("game1.jpg");
    game2Img = loadImage("game2.jpg");
}
function setup(){
    createCanvas(innerWidth-20,innerHeight-60);
    background(0,250,250);
    form1 = new Form();
    form1.display();
    game1 = createSprite(135,350,200,150);
    game1.addImage(game1Img);
    game1.scale = 0.3
    game2 = createSprite(135,600,200,150);
    game2.addImage(game2Img);
    game2.scale = 0.2
}

function draw(){
    drawSprites()
}
