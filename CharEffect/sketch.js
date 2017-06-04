var n = strData.length*5;
var article = [];

function setup() {
	createCanvas(800,600,WEBGL);
	background(0,0,0);
	frameRate(30);
	noStroke();

	for (var i = 0; i < n; ++i) {
		var z = (Math.random()*2-1)*z_depth*sclZ
		var tmp = new Article(z);
		article.push(tmp);
	}
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
}

function show() {
	for (var i = 0; i < n; ++i) 
	{
		article[i].show();
	}
}