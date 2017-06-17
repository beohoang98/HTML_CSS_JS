var slideIndex1 = 0;

showSlide();

function plusSlide(n) {
  slideIndex1 += n;
  showSlide(slideIndex1);
}

function showSlide() {
  var slides = document.getElementsByClassName('slide');
  for (var i = 0; i < slides.length; ++i) {
    slides[i].style.display = "none";
  }
  if (slideIndex1>=slides.length) slideIndex1 = 0;
  else if (slideIndex1<0) slideIndex1 = slides.length-1;
  slides[slideIndex1].style.display = "inline-block";
}
