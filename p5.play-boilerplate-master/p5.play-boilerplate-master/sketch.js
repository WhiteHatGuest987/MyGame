var gameState = 0
var play 
var Cave5 , Cave6
var Player
var bg

function preload() {

Cave5 = loadImage("Pictures/Cave 5 x2.png")

Player1 = loadImage("Pictures/Player1 side.png")

Cave6 = loadImage("Pictures/Cave 6.jpg")

Player2 = loadImage("Pictures/player view back.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
  bg.addImage(Cave5)
  bg.scale = 0.7
  play = createButton("PLAY")
  play.position(windowWidth/2,windowHeight - 100 )
  
  Player = createSprite(50,windowHeight - 150)
  Player.addImage(Player1)
  Player.visible = false;
  Player.scale = 0.7


  ground = createSprite(windowWidth/2,windowHeight - 100,windowWidth*10,30)
  ground.visible = false;

  ground2 = createSprite(windowWidth - 325,windowHeight/2 + 100,windowWidth/2,30)
  ground2.rotation = -30
  
  

}

function draw() {
  if(gameState == 0){
    background("black");  
    textSize(45)
    fill("red")
    text("Runner",windowWidth/2,60)
    textSize(20)
    textFont("AR BERKLEY")
    text("Story goes here",200,200)
    play.mousePressed(()=>{
      gameState = 1
      play.hide()
    })
  
  }
  else if(gameState == 1){
    background("black");
    Player.visible = true;  
    if(keyDown("RIGHT_ARROW")){
      Player.x = Player. x + 5
      bg.x = bg.x - 10
    }
    camera.position.x = Player.x
    if(keyDown("LEFT_ARROW")){
      Player.x = Player. x - 5
    }
    if(keyDown("SPACE")&&Player.y>windowHeight/2){
      Player.velocityY = - 11
    }
    if(bg.x<0){
      bg.x = windowWidth/2
    }
    Player.velocityY = Player.velocityY + 0.5
    Player.collide(ground)
    if(Player.x >815){
      gameState = 2
      bg.addImage(Cave6)
      bg.x = windowWidth/2
      Player.x = windowWidth/2
      Player.addImage(Player2)
      Player.scale = 0.5

    }
  }
  if(gameState == 2){
    background(0)
    bg.scale = 1.2
    Player.velocityY = Player.velocityY + 0.5
    Player.collide(ground)
    if(keyDown("W")){
      Player.y = Player.y - 2
    }
    if(keyDown("D")){
      Player.x = Player.x + 2
    }
    if(keyDown("S")){
      Player.y = Player.y + 2
    }
    if(keyDown("A")){
      Player.x = Player.x - 2
    }
    if(keyDown("SPACE")&&Player.y>windowHeight/2){
      Player.velocityY = - 11
    
    }
    Player.collide(ground2)
  }
  

  
    

  drawSprites();
}