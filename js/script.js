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

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Update the active dot when change slides
function updateActiveDot() {
  // Remove "active" class from all dots
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  // Add "active" class to the dot corresponding to the current slide
  dots[currentSlide].classList.add("active");
}

function showSlide(slideIndex) {
  if (slideIndex < 0) {
    currentSlide = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = slideIndex;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[currentSlide].style.display = "block";

  updateActiveDot();
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
  updateActiveDot();
}

function previousSlide() {
  currentSlide--;
  showSlide(currentSlide);
  updateActiveDot();
}

// Slide Arrows
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

leftArrow.addEventListener("click", () => {
  previousSlide();
});

rightArrow.addEventListener("click", () => {
  nextSlide();
});

// Automatically advance to the next slide every 3 seconds.
setInterval(nextSlide, 3500);

// Select all navigation dots
const dots = document.querySelectorAll(".dot");

dots.forEach((dot) => {
  dot.addEventListener("mouseover", (e) => {
    const slideIndex = parseInt(e.target.getAttribute("data-slide-index"));
    showSlide(slideIndex);
  });
});
