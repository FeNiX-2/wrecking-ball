class Box{
    constructor(x,y){
        var option={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body=Bodies.rectangle(x,y,80,80,option);
       World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,80,80);
        pop();
    }
}