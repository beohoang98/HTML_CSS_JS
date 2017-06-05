var n = strData.length*6;
var article = [];
var a_rX = 0;
var a_rY = 0;
var percon = 0.9;
var oldMouseX, oldMouseY;
var Sensitive = 10/100;

function setup() {
	createCanvas(800,800,WEBGL);
	background(0,0,0);
	frameRate(30);
	noStroke();

	for (var i = 0; i < n; ++i) {
		var z = (Math.random()*2-1)*z_depth*sclZ;
		var tmp = new Article(z);
		article.push(tmp);
	}

	oldMouseX = mouseX;
	oldMouseY = mouseY;

	ambientLight(150);
	pointLight(255, 255, 255, 0, 0, 0);
}

function draw() {
	background(0);
	update();
	show();
}

function update() {
	for (var i = 0; i < n; ++i) 
	{
		article[i].update();
	}
	rX += a_rX;
	rY += a_rY;

	a_rX *= percon;
	a_rY *= percon;
}

function show() {
	for (var i = 0; i < n; ++i) 
	{
		article[i].show();
	}
}

function mousePressed() {
	oldMouseX = mouseX;
	oldMouseY = mouseY;
}

function mouseDragged() {
	a_rX = (mouseX - oldMouseX)*PI*Sensitive/18;
	a_rY = (mouseY - oldMouseY)*PI*Sensitive/18;
	oldMouseX = mouseX;
	oldMouseY = mouseY;
}