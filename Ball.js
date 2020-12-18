class Ball{
    constructor(x,y){
        var option={
            restitution:0.8,
            density:10,

        }
       this.body=Bodies.circle(x,y,30,option)
       World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        ellipseMode(CENTER);
        fill("grey");
        ellipse(pos.x,pos.y,30,30);
    }
}