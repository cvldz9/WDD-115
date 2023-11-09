// Add Meta Tag
const newMetaTag = document.createElement("meta");
newMetaTag.name = "description";
newMetaTag.content =
  "Papyrus is a haven for book enthusiasts, offering a rich and diverse collection that spans genres and captivates the imagination.";
document.head.appendChild(newMetaTag);

// Change Title
document.title = "Papyrus";

// Change Background Color
document.body.style.backgroundColor = "lightgray";

// Change the Color of All Links
const allLinks = document.links;
for (const link of allLinks) {
  link.style.color = "green";
}

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

// Use mousemove event to change the arrows background
leftArrow.addEventListener("mousemove", () => {
  leftArrow.style.backgroundColor = "white";
});

rightArrow.addEventListener("mousemove", () => {
  rightArrow.style.backgroundColor = "white";
});

// Restore the default background color when the mouse leaves the arrows
leftArrow.addEventListener("mouseout", () => {
  leftArrow.style.backgroundColor = "rgba(243, 240, 240, 0.7)";
});

rightArrow.addEventListener("mouseout", () => {
  rightArrow.style.backgroundColor = "rgba(243, 240, 240, 0.7)";
});

// Select the featured book title box
const featuredBookTitleBox = document.querySelector(
  ".ftrbook-box:nth-of-type(1)"
);

// Add some padding to the title box
featuredBookTitleBox.style.padding = "20px";
