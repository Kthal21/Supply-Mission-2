class Box{

constructor(x,y,width,height){

this.body= Bodies.rectangle(x,y,width,height);
World.add(world,this.body)

}
display(){

var posi= this.body.position;
fill("red")
rect(posi.x,posi.y,posi.width,posi.height);
}

};