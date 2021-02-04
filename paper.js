class paper
{
   constructor(x,y,20){
   var options={
     isStatic:false
	 friction:0.3,
	 restitution:0.5,
	 denisty:1.2:
  }

	 this.x = 300;
	 this.y = 700;
	 thisimage.loadImage("C:\Users\i_bha\OneDrive\Desktop\Coding  stuff\crumpledPapertemplate-main\paper.png");
	 this.body = Bodies.circle(x,y,d);
	 World.add(world,this.body)
  } 

  function draw() {
   rectMode(CENTRE)
   background(230);
   paper.display();
  }

}
 