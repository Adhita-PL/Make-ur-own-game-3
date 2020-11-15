var gameState = "start";

function preload() {
  logoImg = loadImage("images/The last survivor.jpg");
  normalBg = loadImage("normalBG/background.png");

  alanStand = loadAnimation("../Alan/Idle__000.png","../Alan/Idle__001.png");
  alanRun = loadAnimation("Alan/Run__000.png","Alan/Run__001.png","Alan/Run__002.png","Alan/Run__003.png","Alan/Run__004.png","Alan/Run__005.png","Alan/Run__006.png");
  alanJump = loadAnimation("Alan/Jump__000.png","Alan/Jump__001.png","Alan/Jump__002.png","Alan/Jump__003.png","Alan/Jump__004.png","Alan/Jump__005.png","Alan/Jump__006.png","Alan/Jump__007.png","Alan/Jump__008.png","Alan/Jump__009.png");
  alanAttack = loadAnimation("Alan/Attack__000.png","Alan/Attack__001.png","Alan/Attack__002.png","Alan/Attack__003.png","Alan/Attack__004.png","Alan/Attack__005.png","Alan/Attack__006.png","Alan/Attack__007.png","Alan/Attack__008.png","Alan/Attack__009.png");
  alanDead = loadAnimation("Alan/Dead__000.png","Alan/Dead__001.png","Alan/Dead__002.png","Alan/Dead__003.png","Alan/Dead__004.png","Alan/Dead__005.png","Alan/Dead__006.png","Alan/Dead__007.png","Alan/Dead__008.png","Alan/Dead__009.png");
  
  sophiaStand = loadImage("../Sophia/Idle__000.png","../Sophia/Idle__001.png");
  sophiaRun = loadAnimation("Sophia/Run__000.png","Sophia/Run__001.png","Sophia/Run__002.png","Sophia/Run__003.png","Sophia/Run__004.png","Sophia/Run__005.png","Sophia/Run__006.png","Sophia/Run__007.png","Sophia/Run__008.png","Sophia/Run__009.png");
  sophiaJump = loadAnimation("Sophia/Jump__000.png","Sophia/Jump__001.png","Sophia/Jump__002.png","Sophia/Jump__003.png","Sophia/Jump__004.png","Sophia/Jump__005.png","Sophia/Jump__006.png","Sophia/Jump__007.png","Sophia/Jump__008.png","Sophia/Jump__009.png");

  coinsImg = loadAnimation("../goldCoins/1.png","../goldCoins/2.png","../goldCoins/3.png","../goldCoins/4.png","../goldCoins/5.png","../goldCoins/6.png");
  
}

function setup() {
  createCanvas(1200,800);

  logo = createSprite(600,50);
  logo.addImage("logo",logoImg);

  inviground1 = createSprite(50,685,500,10);
  inviground2 = createSprite(685,610,450,10);
  inviground3 = createSprite(285,430,230,10);
  inviground4 = createSprite(150,170,300,10);
  inviground5 = createSprite(1000,675,150,10);
  inviground6 = createSprite(530,280,150,5);
  inviground7 = createSprite(710,480,300,10);
  inviground8 = createSprite(750,200,150,10);
  inviground9 = createSprite(1100,170,250,10);
  inviground1.visible = false;
  inviground2.visible = false;
  inviground3.visible = false;
  inviground4.visible = false;
  inviground5.visible = false;
  inviground6.visible = false;
  inviground7.visible = false;
  inviground8.visible = false;
  inviground9.visible = false;

  alan = createSprite(30,610);
  alan.addAnimation("stand",alanStand);
  alan.addAnimation("jump", alanJump);
  alan.addAnimation("run",alanRun);
  alan.scale = 0.15;

  sophia = createSprite(70,645);
  sophia.addImage("sophia",sophiaStand);
  sophia.scale =  0.15;
}

function draw() {
  background(0);  
  if(gameState === "start") {
    alan.visible = false;
    sophia.visible = false;
    textSize(30);
    fill("red");
    text("Alan and sophia were travelling through a forest. In their way they found a map. The map ",25,200);
    text("shows a way to a secret place where there's a lot of money. They thought to go to ",25, 230);
    text("the place and collect the money for the purpose of devoloping their village.",25,260);
    text("So, help Alan and sophia to collect the money!",25,330);
    text("The one with more money at the end will be the hero of the village", 25,360);
    text("(HINT : Press Arrow keys to control Alan and press A,S,D,W keys for Sophia)",25,390);
    textSize(35);
    text("Press Space to start the game",300,500);
    if(keyCode === 32) {
      gameState = "play";
    }
  }
  if(gameState === "play") {
    logo.visible = false;
    alan.visible = true;
    sophia.visible = true;
    background(255);
    background(normalBg);
    coins = createSprite(50,30);
    coins.addAnimation("coins",coinsImg);
    coins.scale = 0.01;

    if(keyDown("RIGHT_ARROW")) {
      alan.x = alan.x + 3;
      alan.changeAnimation("run", alanRun);
    }else {
      alan.changeAnimation("stand", alanStand);
    }
    if(keyDown("LEFT_ARROW")) {
      alan.x = alan.x - 3;
      alan.mirrorX*-1;
      alan.changeAnimation("run", alanRun)
    }else {
      alan.changeAnimation("stand", alanStand);
    }
    if(keyDown("UP_ARROW")) {
      alan.velocityY = -5;
      alan.changeAnimation("jump", alanJump);
    }
    alan.velocityY = alan.velocityY + 0.5;
    alan.velocityY = alan.velocityY + 0.5;
    alan.collide(inviground1);
    alan.collide(inviground2);
    alan.collide(inviground3);
    alan.collide(inviground4);
    alan.collide(inviground5);
    alan.collide(inviground6);
    alan.collide(inviground7);
    alan.collide(inviground8);
    alan.collide(inviground9);
    //sophia
    if(keyCode === 68) {                                       // d
      sophia.x = sophia.x + 3;
      sophia.changeAnimation("run", sophiaRun);
    }else {
      sophia.changeAnimation("stand", sophiaStand);
    }
    if(keyCode === 65) {                                 // A
      sophia.x = sophia.x - 3;
      sophia.mirrorX*-1;
      sophia.changeAnimation("run", sophiaRun)
    }else {
      sophia.changeAnimation("stand", sophiaStand);
    }                                                           
    if(keyCode === 87) {                                  // w
      sophia.velocityY = -5;
      sophia.changeAnimation("jump", sophiaJump);
    }
    sophia.velocityY = sophia.velocityY + 0.5;
    sophia.velocityY = sophia.velocityY + 0.5;
    sophia.collide(inviground1);
    sophia.collide(inviground2);
    sophia.collide(inviground3);
    sophia.collide(inviground4);
    sophia.collide(inviground5);
    sophia.collide(inviground6);
    sophia.collide(inviground7);
    sophia.collide(inviground8);
    sophia.collide(inviground9);
  }
  drawSprites();
}

