var test ;





function setup() {
  createCanvas(400,400);
test=createSprite (200, 200, 30, 30) ;

}

function draw() 
{
  background(30);
if (keyDown("right")) {
  test.x += 5 ;
}
if (keyDown("left")) {
  test.x -= 5 ;
}
if (keyDown("up")) {
  test.y -= 5 ;
}
if (keyDown("down")) {
  test.y += 5 ;
}




drawSprites ();
}




