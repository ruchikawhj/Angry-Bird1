class Ground{
    constructor(x,y,w,h){
        var options={isStatic:true};
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);

    }
    display(){
        var p=this.body.position;
        stroke("white");
        strokeWeight(3)
        fill("brown")
        rectMode(CENTER);
        rect(p.x,p.y,this.w,this.h);
    }
}