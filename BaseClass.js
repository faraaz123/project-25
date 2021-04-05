class BaseClass {
    constructor(x,y,width,height,angle){
        var options = {
            isStatic : false,
            'restitution':0.3,
            'density':1.2,
            'friction':0
        }
        this.body  = Bodies.rectangle(x,y,width,height,angle,options)
        this.width = width;
        this.height = height;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();


    }
}
