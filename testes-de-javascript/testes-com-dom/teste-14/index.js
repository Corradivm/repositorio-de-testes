let slideIndex = 1;

function defaultSlide() {
  document.getElementsByClassName('main-img')[0].style.display = 'block';
  document.getElementsByClassName('small-img')[0].style.opacity = '1';
  document.getElementsByClassName('small-img')[0].style.cursor = 'default';
}

function switchSlide(n) {
  slideIndex += n;
  newSlide(slideIndex)
}

function selectedSlide(n) {
  slideIndex = n;
  newSlide(slideIndex)
}

function newSlide(n) {
  let c;
  const slidesLength = document.getElementsByClassName('main-img').length;
  const slides = document.getElementsByClassName('main-img');
  const smallSlides = document.getElementsByClassName('small-img');
  const smallslidesLength = document.getElementsByClassName('small-img').length;

  if (slideIndex < 1) {
    slideIndex = slidesLength;
  }
  if (slideIndex > slidesLength) {
    slideIndex = 1;
  }
  for (c = 0; c < slidesLength; c++) {
    slides[c].style.display = 'none';
    smallSlides[c].style.cursor = 'pointer';
    smallSlides[c].style.opacity = '0.3';
  }

  slides[slideIndex - 1].style.display = 'block';
  smallSlides[slideIndex - 1].style.opacity = '1';
  smallSlides[slideIndex - 1].style.cursor = 'default';
}
