class Boogie{
    constructor(x,y,w,h){
        var options = {
            isStatic:false 
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.w=w
        this.h=h
        this.image=loadImage("images/coach.png")
        World.add(myWorld,this.body)

    }
    display(){
       imageMode(CENTER)
       image(
           this.image,this.body.position.x,this.body.position.y,this.w,this.h
       ) 
    }
}
