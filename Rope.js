class Rope{
    constructor(body1,body2,offsetX,offsetY){
        var options={
            bodyA:body1,
            bodyB:body2,
            length:10,
           stiffness:0.04,
           pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        this.chain= Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        stroke("white");
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
    }

}