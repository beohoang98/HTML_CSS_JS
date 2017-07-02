var dBall = 10;
var ballArr = [];

function Ball(x0, y0) {
    this.x = x0;
    this.y = y0;
    this.vx = 0;
    this.vy = 0;

    this.moving = function() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x>width) {this.x = width-dBall/2; this.vx*=-1};
        if (this.x<0) {this.x = 0; this.vx*=-1};
        if (this.y<0) {this.y = 0; this.vy*=-1};

        if (this.y>height) {
            this.y = height-dBall/2;
            this.setV(0, 0);
        };
    }

    this.isStop = function() {
        return ((this.vx===0)&&(this.vy===0));
    }

    this.setV = function(vx, vy) {
        this.vx = vx;
        this.vy = vy;
    }

    this.setPos = function(x, y) {
        this.x = x;
        this.y = y;
    }

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, dBall, dBall);
    }
}

function addBall(n, x0, y0) {
    for (var i = 0; i < n; ++i) {
        ballArr.push(new Ball(x0, y0));
    }
}
function drawBall() {
    for (var i = 0; i < ballArr.length; ++i) {
        ballArr[i].show();
    }
}
function resetBall(x0, y0) {
    for (var i = 0; i < ballArr.length; ++i) {
        ballArr[i].setPos(x0, y0);
    }
}
