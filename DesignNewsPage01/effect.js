function changeSlide(idName, n) {
    var curSlide = $(idName).attr('cur-slide');
    var numSlide = $(idName).attr('num-slide');

    if (n==='-') curSlide--;
    else curSlide++;
    if (curSlide < 1) curSlide = numSlide;
    else if (curSlide > numSlide) curSlide = 1;

    $(idName).attr('cur-slide',curSlide);

    showSlide(idName, curSlide-1, numSlide);
}

function showSlide(idName, index, numSlide) {
    var slide = $(idName+' .slideshow');
    slide.css('transform','translateX(-'+(index*100/numSlide)+'%)')
}
