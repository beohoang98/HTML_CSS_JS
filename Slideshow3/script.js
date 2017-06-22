var $slide = document.getElementsByClassName('slide');
var widthOfSlide = $slideshow.offsetWidth/lenOfSlide;
var widthOfSlideshow = document.querySelector('.slideshow-contain').offsetWidth;


for (var i = 0; i < $slide.length; ++i) {
    $slide[i].setAttribute('onclick',"showSlide("+(i+1)+");");
}

var curSlide = 1;
showSlide(curSlide);

function changeSlide(n) {
    if (curSlide < lenOfSlide && n > 0) curSlide += n;
    else if (curSlide > 1 && n < 0) curSlide += n;
    else return;
    showSlide(curSlide);
}

function showSlide(index) {
    curSlide = index;
    var offsetLeft = -(index-1+0.5)*widthOfSlide + widthOfSlideshow/2;
    for (var i = 0; i < lenOfSlide; ++i) {
        $slide[i].className = 'slide';
        $slide[i].style.zIndex = 0;
    }
    $slide[index-1].className = 'slide slide-active';
    $slide[index-1].style.zIndex = 1;
    $slideshow.style.left = offsetLeft + "px";
}
