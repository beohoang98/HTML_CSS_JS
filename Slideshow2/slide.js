var currentIndex = 1;

var slides = document.getElementsByClassName('slideshow')[0];
var views = document.querySelectorAll('#view a');

slides.style.left = "0px";

show(0);

function plusIndex(n) {
    currentIndex += n;
    if (currentIndex < 1) currentIndex = post.length;
    else if (currentIndex > post.length) currentIndex = 1;
    show(currentIndex-1);
}

function show(index) {
    slides.style.left = (-index*100)+"%";
    for (var i = 0; i < views.length; ++i) {
        views[i].style.opacity = 0.5;
    }
    views[index].style.opacity = 1;
}
