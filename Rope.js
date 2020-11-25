class Rope{
    constructor(b1,b2){
        var options = {
            bodyA : b1,
            pointB : b2,
            stiffness : 1.2,
            lenght : 250
        }
        this.r = Constraint.create(options)
        this.point = b2
        World.add(world,this.r)
    }
    display(){
        var posA = this.r.bodyA.position
        var posB = this.point
        line(posB.x,posB.y,posA.x,posA.y)
    }
    }