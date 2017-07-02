var rBox = 20;
var boxArr = [];

function Box(x0, y0, mass, color) {
    this.x = x0;
    this.y = y0;
    this.color = color;
    this.oldmass = mass;
    this.mass = mass;

    this.show = function() {
        if (this.mass==this.oldmass) fill(this.color);
        else fill(255);
        this.oldmass = this.mass;

        rect(this.x - rBox, this.y - rBox, rBox*2, rBox*2);
        fill(0);
        text(this.mass, this.x-rBox, this.y);
    }

    this.reduce = function() {
        this.oldmass = this.mass;
        this.mass--;
    }

    this.isDie = function() {
        return (this.mass<=0);
    }

    this.moveDownOne = function() {
        var that = this;
        setTimeout(function() {
            that.y+=1;
        }, 100);
    }
}

function addBox() {
    var x = 0;
    var y = rBox;
    while (true) {
        x += floor(random(5)+1)*rBox*2;
        if (x > width-rBox) return;

        var color = [random(128)+128, random(128)+128, random(128)+128];
        boxArr.push(new Box(x, y, ballArr.length+1, color));
    }
}
function moveDownBox() {
    for (var i = 0; i < boxArr.length; ++i) {
        for (var j = 0; j < rBox*2; ++j) {
            boxArr[i].moveDownOne();
        }
    }
}

function removeDieBox() {
    for (var i = 0; i < boxArr.length; ++i) {
        if (boxArr[i].isDie()) boxArr.splice(i,1);
    }
}
function drawBox() {
    for (var i = 0; i < boxArr.length; ++i) {
        boxArr[i].show();
    }
}
