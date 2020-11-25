class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.g = Bodies.rectangle(x,y,width,height,options)
      this.w = width
      this.h = height
      World.add(world,this.g)
    }
    display(){
        rectMode(CENTER)
        fill("brown")
        rect(this.g.position.x,this.g.position.y,this.w,this.h)
    }

}
