let slideIndex = 1;
let slideInterval;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
  clearInterval(slideInterval);
  showSlides((slideIndex += n));
  resetInterval();
}

function currentSlide(n) {
  clearInterval(slideInterval);
  showSlides((slideIndex = n));
  resetInterval();
}

function resetInterval() {
  slideInterval = setInterval(() => {
    showSlides(++slideIndex);
  }, 2000);
}

showSlides(slideIndex);
resetInterval();
