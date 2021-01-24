class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visibility=255;
    }
display(){
  console.log(this.body.speed);
  if(this.body.speed<3){
    super.display();
  }
  else{
    World.remove(world, this.body);
    this.visibility=this.visibility-5;
    tint(255,this.visibility);
    image(this.image,this.body.position,this.body.position.y,20,20);
    pop();
  }
}
score(){
  if (this.visibility<0 && this.visibility>-1005){
    score++;
  }
}
};
