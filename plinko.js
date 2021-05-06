class Plinko{
    constructor(x, y){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Matter.Bodies.circle (x, y, 10, options);
        this.radius = 10;
        World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("white");
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius, this.radius);
      pop();

    }


};