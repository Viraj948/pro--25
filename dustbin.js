class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=200;
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		
		this.image=loadImage("dustbingreen.png")
		

	
		World.add(world, this.bottomBody)
		

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			

			

			

			push()
			translate(posBottom.x, posBottom.y);
			imageMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			image(this.image,0,0,this.wallThickness, this.dustbinHeight);
			pop()

			
	}

}