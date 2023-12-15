//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();

  next_fs.fadeIn();
  current_fs.slideUp();
  // next_fs.slideDown();

  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale current_fs down to 80%
        scale = 1 - (1 - now) * 0.2;
        //2. bring next_fs from the right(50%)
        left = now * 50 + "%";
        //3. increase opacity of next_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({
          transform: "scale(" + scale + ")",
          position: "absolute",
        });
        next_fs.css({ left: left, opacity: opacity });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: "easeInOutBack",
    }
  );
});

$(".previous").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();

  //de-activate current step on progressbar
  $("#progressbar li")
    .eq($("fieldset").index(current_fs))
    .removeClass("active");

  //show the previous fieldset
  previous_fs.show();
  //hide the current fieldset with style
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale previous_fs from 80% to 100%
        scale = 0.8 + (1 - now) * 0.2;
        //2. take current_fs to the right(50%) - from 0%
        left = (1 - now) * 50 + "%";
        //3. increase opacity of previous_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({ left: left });
        previous_fs.css({
          transform: "scale(" + scale + ")",
          opacity: opacity,
        });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: "easeInOutBack",
    }
  );
});

$(document).ready(function () {
  // Add Meta Tag
  var newMetaTag = $("<meta>", {
    name: "description",
    content:
      "Papyrus is a haven for book enthusiasts, offering a rich and diverse collection that spans genres and captivates the imagination.",
  });
  $("head").append(newMetaTag);

  // Change Title
  $("title").text("Papyrus");

  // Change Background Color
  $("body").css("background-color", "white");

  // Change the Color of All Links
  $("a").css("color", "black");

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

  var slides = $(".slide");
  var currentSlide = 0;

  // Update the active dot when changing slides
  function updateActiveDot() {
    $(".dot").removeClass("active");
    $(".dot:eq(" + currentSlide + ")").addClass("active");
  }

  function showSlide(slideIndex) {
    if (slideIndex < 0) {
      currentSlide = slides.length - 1;
    } else if (slideIndex >= slides.length) {
      currentSlide = 0;
    } else {
      currentSlide = slideIndex;
    }

    slides.hide();
    slides.eq(currentSlide).show();

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
});
