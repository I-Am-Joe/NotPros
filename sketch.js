const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a;
var engine,world;
var Grounds,platform1,platform2,platform3;
var Hexagon,Slingshotse;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12

var score=0;

var circles=[];
function setup() {
  createCanvas(800,800);
  stroke(255)
  
  a=height;
  circles.push(width/2)
  
  Grounds=new Ground(400,10,800,20);
  platform1=new Ground(150,190,100,20);
  platform2=new Ground(360,400,100,20);
  platform3=new Ground(50,140,100,20);

  box1=new Box(360,410,30,30);
  box2=new Box(375,410,30,30);
  box3=new Box(390,410,30,30);
  box4=new Box(365,420,30,30);
  box5=new Box(380,420,30,30);
  box6=new Box(372.5,430,30,30);

  box7=new Box(150,200,30,30);
  box8=new Box(175,200,30,30);
  box9=new Box(190,200,30,30);
  box10=new Box(165,220,30,30);
  box11=new Box(180,220,30,30);
  box12=new Box(172.5,230,30,30);

  
  Hexagon= new Bird(150,220);

  Slingshotse= new SlingShot(Hexagon.body,{x:200,y:300});

}

function draw() {
  background(0);  
  
  
  a=a-1;
 
  text("Score: "+score,750,40);
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 drawSprites();
 Grounds.display();
 platform1.display();
 platform2.display();
 platform3.display();
 box1.display();
 box1.score();
 box2.display();
 box2.score();
 box3.display();
 box3.score();
 box4.display();
 box4.score();
 box5.display();
 box5.score();
 box6.display();
 box6.score();
 box7.display();
 box7.score();
 box8.display();
 box8.score();
 box9.display();
 box9.score();
 box10.display();
 box10.score();
 box11.display();
 box11.score();
 box12.display();
 box12.score();
 Hexagon.display();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY});

}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 
function keyCode(){
  if(keyCode === 32){
    slingshot.attach(Hexagon.body);
  }
}
async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Toronto");
  var responseJSON = await response.response.json();
  var dateTime=responseJSON.dateTime;
  var hour = dateTime.slice(11,13);

  if(hour>=0600 && hour<=1900){
    background(0);
}
else{
    background(255);
}
  console.log(responseJSON);
}