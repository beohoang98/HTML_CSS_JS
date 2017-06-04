var strWidth = 15;
var strHeight= 5;
var z_depth = 100;

var offX = 5;
var offY = 5;

var sclWidth  = 800/(strWidth+offX*2);
var sclHeight = 600/(strHeight+offY*2);
var sclZ = 10;

var strData =  [1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,
				1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,
				1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,
				1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,
				1,1,1,0,1,1,1,0,0,1,0,0,1,0,1];

function Article(z_begin) {
	this.index	= Math.floor(Math.random()*(strWidth*strHeight));
	this.x		= this.index%strWidth;
	this.y		= Math.floor(this.index/strWidth);
	this.colorR	= Math.random()*256;
	this.colorG = 0;
	this.colorB = Math.random()*128+128;
	this.z		= z_begin;

	this.update = function() {
		if (this.z < -z_depth*sclZ) 
		{
			this.index	= Math.floor(Math.random()*(strWidth*strHeight));
			this.x		= this.index%strWidth;
			this.y		= Math.floor(this.index/strWidth);
			this.z 		= z_depth*sclZ;
		}
		else 
			this.z-= sclZ;
	}

	this.show = function() {
		if (strData[this.index]===0) return;
		push();
		fill(this.colorR, this.colorG, this.colorB, 128);
		
		var eZ = Math.max(this.z,-z_depth*sclZ/2);
		translate(-400, -300, eZ);
		
		ellipse((this.x + offX)*sclWidth,
				(this.y + offY)*sclHeight,
				sclWidth,
				sclHeight);
		pop();
	}
}