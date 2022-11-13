class Log{
    constructor(x,y,w,angle){
        var options={restitution:0.8,friction:1.0,density:1.0};
        this.w=w;
        this.h=20;
        this.body=Bodies.rectangle(x,y,this.w,this.h,options);
        Matter.Body.setAngle(angle)
        World.add(world,this.body);

    }
    display(){
        var p=this.body.position;
        push();
        stroke("white");
        strokeWeight(3)
        fill("blue")
        rectMode(CENTER);
        rect(p.x,p.y,this.w,this.h);
        pop();

    }
}