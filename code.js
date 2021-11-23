var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0adac267-2f87-4613-b931-eee35a6d2fa6"],"propsByKey":{"0adac267-2f87-4613-b931-eee35a6d2fa6":{"name":"volleyball","sourceUrl":"assets/api/v1/animation-library/gamelab/Yr547P.Zjz5iZluXcGpzwKpozGcMO7CM/category_sports/volleyball2.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"Yr547P.Zjz5iZluXcGpzwKpozGcMO7CM","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Yr547P.Zjz5iZluXcGpzwKpozGcMO7CM/category_sports/volleyball2.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  yachi = createSprite(20,190,13,13);
 yachi.shapeColor = "yellow";
  
  
    
  
    
   
    
  bola1 = createSprite(100,130,10,10);
  bola1.shapeColor = "red";

    
  bola2 = createSprite(215,130,10,10);
    bola2.shapeColor = "red";
  bola3 = createSprite(165,250,10,10);
  bola3.shapeColor = "red";
  bola4 = createSprite(270,250,10,10);
  bola4.shapeColor = "red";
  
  
  bola1.velocityY = 8;
  bola2.velocityY = 8;
  bola3.velocityY = -8;
  bola4.velocityY = -8;
 

function draw() {
  background("white");
  text("Vidas: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
  bola1.bounceOff(boundary1);
  bola1.bounceOff(boundary2);
  bola2.bounceOff(boundary1);
  bola2.bounceOff(boundary2);
  bola3.bounceOff(boundary1);
  bola3.bounceOff(boundary2);
  bola4.bounceOff(boundary1);
  bola4.bounceOff(boundary2);
  
 
  if(keyDown("right")){
    yachi.x = yachi.x + 2;
  }
  if(keyDown("left")){
    yachi.x = yachi.x - 2;
  }
  
  if(
     yachi.isTouching(bola1)||
     yachi.isTouching(bola2)||
     yachi.isTouching(bola3)||
     yachi.isTouching(bola4))
  {
     yachi.x = 20;
     yachi.y = 190;
     life = life + 1;
  }
  
 drawSprites();
}






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
