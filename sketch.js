const Engine= Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;
var engine,world;


function setup(){
    var canvas=createCanvas(1200,600);

    engine=Engine.create();
    world=engine.world;
    ground= new Ground(600,580,1200,20)
    box1=new Box(600,560)
    box2=new Box(680,560)
    box3=new Box(760,560)
    box4=new Box(840,560)
    box5=new Box(920,560)
    box6=new Box(660,480)
    box7=new Box(740,480)
    box8=new Box(820,480)
    box9=new Box(670,400)
    ball=new Ball(550,300)
    rope=new Rope(ball.body,{x:550,y:0})
}

function draw(){
    background("white")
   Engine.update(engine);
   ground.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   ball.display();
   rope.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}