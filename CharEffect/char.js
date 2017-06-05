var strWidth = 28;
var strHeight= 5;
var z_depth = 500;
var gZ = 0.05;

var offX = 5;
var offY = 5;

var sclWidth  	= 800/(strWidth+offX*2);
var sclHeight 	= 800/(strHeight+offY*2);
var scl 		= Math.min(sclHeight, sclWidth);
var sclZ 		= 15;

var PI = 3.141592698;

var rX = 0;
var rY = 0;

var strData =  [1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,
				1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,
				1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,
				1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,
				1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0];

function Article(z_begin) {
	this.index	= Math.floor(Math.random()*(strWidth*strHeight));
	this.x		= this.index%strWidth;
	this.y		= Math.floor(this.index/strWidth);
	this.colorR	= Math.random()*256;
	this.colorG = 0;
	this.colorB = Math.random()*128+128;
	this.z		= z_begin;
	this.zspeed = 0;

	this.update = function() {
		if (strData[this.index]===0) return;
		if (this.z < 0) 
		{
			this.zspeed += gZ;
		}
		else {
			this.zspeed -= gZ;
			this.zspeed *= 0.96;
		}
		this.z += this.zspeed*sclZ;
	}

	this.show = function() {
		if (strData[this.index]===0) return;
		push();
		//fill(this.colorR, this.colorG, this.colorB, 255);
		specularMaterial(this.colorR, this.colorG, this.colorB);

		var eZ = this.z;
		rotateX(rY);
		rotateY(rX);
		
		/*translate(-400, -300, eZ);
		ellipse((this.x + offX)*sclWidth,
				(this.y + offY)*sclHeight,
				sclWidth,
				sclHeight);
		*/
		translate((this.x + offX)*scl-400, 
				(this.y + offY)*scl-300,
				eZ);
		box(scl);
		pop();
	}
}