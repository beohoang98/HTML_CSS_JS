var sclV = 5;
var score = 0;

var divTime = 5;
var frameCount = 0;

var dx = 0, dy = 0;

var xBegin;
var yBegin;
var curBallInShot = 0;

var mouseOn = false; //when pressed in screen
var isFinish = true; //when balls stop all

function setup() {
    createCanvas(320, 560);// iphone 5
    frameRate(50);
    background(0);
    stroke(255, 255, 255);
    fill(255);
    textSize(20);

    //
    xBegin = width/2;
    yBegin = height-dBall/2;

    //create balls
    addBall(2, xBegin, yBegin);

    //create boxs
    addBox();
}

function draw() {
    background(0);
    noStroke();

    isFinish = calculate();

    ++frameCount;
    if (frameCount >= divTime) {
        drawBall();
        drawBox();
        fill(255);
        text('Ball: '+ballArr.length, 20, height-20);
        fill(200, 200, 30);
        text('Score: '+score, 20, height-40);

        frameCount = 0;
    }

    //display mouse direction
    stroke(200);
    if (mouseOn && isFinish) {
        line(xBegin, yBegin, mouseX, mouseY);
    }
}

//ball and box event here
function isBallTouchBox(ball, box) {
    var isTouchX = (ball.x <= box.x+rBox+dBall/2
                    && ball.x >= box.x-rBox-dBall/2);
    var isTouchY = (ball.y <= box.y+rBox+dBall/2
                    && ball.y >= box.y-rBox-dBall/2);
    var isTouchCorner = false;
    return ((isTouchX && isTouchY) || isTouchCorner);
}

function ballVsBox() {
    for (var i = 0; i < ballArr.length; ++i)
        for (var j = 0; j < boxArr.length; ++j)
        {
            if (!isBallTouchBox(ballArr[i], boxArr[j])) continue;
            boxArr[j].reduce();

            var sound = document.querySelector('#ping');
            sound.currentTime = 0;
            sound.play();
            ++score;

            var dx = abs(ballArr[i].x - boxArr[j].x);
            var dy = abs(ballArr[i].y - boxArr[j].y);
            if (dx > dy) ballArr[i].vx *= -1;
            else if (dx < dy) ballArr[i].vy *= -1;
            else {
                ballArr[i].vx *= -1;
                ballArr[i].vy *= -1;
            }
            ballArr[i].moving();
        }

}

function calculate() {
    if (isFinish) return true;

    ballVsBox();
    removeDieBox();
    var count = 0;

    if (floor(curBallInShot/divTime) < ballArr.length) {
        ballArr[floor(curBallInShot/divTime)].setV(dx, dy);
        ++curBallInShot;
    }

    for (var i = 0; i < ballArr.length; ++i) {
        ballArr[i].moving();
        if (ballArr[i].isStop()) ++count;
    }

    if (count === ballArr.length) {
        xBegin = ballArr[0].x;
        yBegin = ballArr[0].y;

        addBall(1, xBegin, yBegin);
        resetBall(xBegin, yBegin);
        addBox(3);
        moveDownBox();

        return true;
    }
    else return false;
}




//mouse event here
function mousePressed() {
    if (!isFinish) return;
    mouseOn = true;
}
function mouseReleased() {
    if (!isFinish) return;

    dx = mouseX-xBegin;
    dy = mouseY-yBegin;
    var d = Math.sqrt(dx*dx + dy*dy);
    dx = dx*sclV/d;
    dy = dy*sclV/d;
    console.log(dx+', '+dy);
    mouseOn = false;

    //And so it begin
    isFinish = false;
    curBallInShot = 0;
}
//for touch screen
function mouseDragged() {
    if (!isFinish) return;
    mouseOn = true;
    stroke(200);
    if (mouseOn && isFinish) {
        line(xBegin, yBegin, mouseX, mouseY);
    }
}
