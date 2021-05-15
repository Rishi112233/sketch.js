class plinko
{
    constructor(x,y)
  {
     var options = {
         restitution : 1,
         friction    : 1,
         isStatic    : true,    
     } 
    this.radius = 10;
    this.body = Bodies.circle(x,y,this.radius,options);
    World.add(world,this.body);
  }  
              display()
    {
       var pos   = this.body.position;
       var angle = this.body.angle;

       push();
       translate(pos.x,pos.y);
       rotate(angle);
       imageMode(CENTER);
      strokeWeight(3);
       fill(197,96,255);
       ellipseMode(RADIUS);
       ellipse(0,0,this.radius,this.radius);
       pop();
    }           
}