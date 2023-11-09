/*----------TRENDING BOOKS----------*/
var trendingSlider = new Swiper(".trending-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Hero Slider
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(slideIndex) {
  if (slideIndex < 0) {
    currentSlide = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    currentSlide = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[currentSlide].style.display = "block";
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

// Automatically advance to the next slide every 3 seconds.
setInterval(nextSlide, 3500);

showSlide(currentSlide);

// Slide Arrows
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

leftArrow.addEventListener("click", () => {
  previousSlide();
});

rightArrow.addEventListener("click", () => {
  nextSlide();
});

// End Hero Slider
