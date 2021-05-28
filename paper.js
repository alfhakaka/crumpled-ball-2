class Paper{
    constructor(x, y, radius ) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':0.2,
        }
        this.body = Bodies.circle(x, y, radius,options);
        this.diameter=2*radius
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("white")
        imageMode(RADIUS);
        image(this.image, 0, 0, this.diameter, this.diameter);
        // ellipseMode(CENTER)
        // ellipse(0,0,this.diameter,this.diameter)
        pop();
      }
}