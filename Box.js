class Box{
    constructor(x,y,w,h){
        var options = {
            restitution : 0.8,
            density : 0.04,
            friction : 1
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.w = w
        this.h = h
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill(255)
        strokeWeight(3)
        stroke("green")
        rect(0,0,this.w,this.h)
        pop()
    }
}