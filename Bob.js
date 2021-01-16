class Bob{
    constructor(x,y,radius){
        var options = {
            restitution:1,
            friction:0,
            density:0.8,              
            isStatic:false
        }
        this.body=Bodies.circle(x,y,radius/2,options);
       this.radius=radius;
       World.add(world,this.body)
    }  
    display(){
      push();
      translate(this.body.position.x,this.body.position.y)
      ellipseMode(RADIUS);
      fill("yellow");
     ellipse(0,0,this.radius,this.radius);
     
     pop();
    }
  }