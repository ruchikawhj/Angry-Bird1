class Box{
    constructor(x,y){
        var options={restitution:0.8,friction:1.0,density:1.0};
        this.w=50;
        this.h=50;
        this.body=Bodies.rectangle(x,y,this.w,this.h,options);
        World.add(world,this.body);

    }
    display(){
        var p=this.body.position;
        push();
        stroke("green");
        strokeWeight(3)
        fill("white")
        rectMode(CENTER);
        rect(p.x,p.y,this.w,this.h);
        pop();

    }
}