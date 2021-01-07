class Dustbin{
    constructor(x,y){
        this.x = x
        this.y = y
        this.w = 200
        this.h = 230
        this.t = 20
        var options = {
            isStatic:true
        }
        this.bBody = Bodies.rectangle(this.x,this.y,this.w,this.t,options)
        this.lBody = Bodies.rectangle(this.x- this.w/2,this.y- this.h/2,this.t,this.h,options)
        this.rBody = Bodies.rectangle(this.x+ this.w/2,this.y- this.h/2,this.t,this.h,options)
        World.add(world,this.bBody)
        World.add(world,this.lBody)
        World.add(world,this.rBody)


    }
    display(){
        var posb = this.bBody.position
        var posl = this.lBody.position
        var posr = this.rBody.position

        push()
        translate(posl.x,posl.y)
        fill("red")
        angleMode(RADIANS)
        rotate(this.angle)
        rect(0,0,this.t,this.h)
        pop()

        push()
        translate(posr.x,posr.y)
        fill("red")
        angleMode(RADIANS)
        rotate(-1*this.angle)
        rect(0,0,this.t,this.h)
        pop()

        push()
        translate(posb.x,posb.y)
        fill("red")
        angleMode(RADIANS)
        rect(0,0,this.w,this.t)
        pop()
    }
}