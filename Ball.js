class Ball{
    constructor(x,y,w,h){
        var options = {
            density:1,
            frictionAir:0.005
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
        this.w = w
        this.h = h
    }
    show(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        fill("red")
        ellipse(0,0,this.w,this.h)
        pop()
    }
}