class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      console.log("vaishnavi");
      var position = [this.body.position.x,this.body.position.y];
    this.trajectory.push(position);
    console.log(this.trajectory[1]);
    }
    

    for(var i = 0;i<this.trajectory.lenght;i++) {
      console.log("vaishnavi2")
      image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1],50,50)
    }
  }
}
