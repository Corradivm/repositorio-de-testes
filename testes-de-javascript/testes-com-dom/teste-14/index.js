let slideIndex = 1;
let timer;
const runTimer = () => {
  timer = window.setInterval(
    () => {
      slideIndex += 1;
      return newSlide(slideIndex);
    }, 5000);
}
runTimer();

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

  if (slideIndex < 1) {
    slideIndex = slidesLength;
  } else if (slideIndex > slidesLength) {
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

document.body.onclick = () => {
    clearInterval(timer)
    runTimer()
}