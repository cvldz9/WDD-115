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

  // Slide Arrows
  $("#leftArrow").on("click", function () {
    previousSlide();
  });

  $("#rightArrow").on("click", function () {
    nextSlide();
  });

  // Automatically advance to the next slide every 3 seconds.
  setInterval(nextSlide, 3500);

  // Select all navigation dots
  $(".dot").on("mouseover", function (e) {
    var slideIndex = parseInt($(this).attr("data-slide-index"));
    showSlide(slideIndex);
  });

  // Use mousemove event to change the arrows background
  $("#leftArrow").on("mousemove", function () {
    $(this).css("background-color", "white");
  });

  $("#rightArrow").on("mousemove", function () {
    $(this).css("background-color", "white");
  });

  // Restore the default background color when the mouse leaves the arrows
  $("#leftArrow, #rightArrow").on("mouseout", function () {
    $(this).css("background-color", "rgba(243, 240, 240, 0.7)");
  });

  // Select the featured book title box
  var featuredBookTitleBox = $(".ftrbook-box:nth-of-type(1)");

  // Select the featured book image box
  var featuredBookImageBox = $(".ftrbook-box:nth-of-type(2)");

  // Select the featured book description box
  var featuredBookDescriptionBox = $(".ftrbook-box:nth-of-type(3)");

  // Add some padding to the title box
  featuredBookTitleBox.css("padding", "20px");

  // Adjust the image box by adding some margin and a grid column.
  featuredBookImageBox.css({
    margin: "0 auto",
    "border-radius": "20px",
    "grid-column": "1 / 4",
  });

  // Style the description box
  featuredBookDescriptionBox.css({
    padding: "20px",
    "border-radius": "20px",
    "box-shadow": "5px 5px 20px rgba(0, 0, 0, 0.2)",
    "grid-column": "4 / 10",
    "grid-row": "2 / 3",
  });

  // Style the categories links by changing their color
  var categoryLinks = featuredBookDescriptionBox.find("a");
  categoryLinks.css({
    color: "rgb(144, 144, 144)",
    "text-decoration": "none",
  });

  categoryLinks.on("mouseover", function () {
    $(this).css({
      color: "rgb(0, 162, 255)",
      "text-decoration": "underline",
    });
  });

  categoryLinks.on("mouseout", function () {
    $(this).css({
      color: "rgb(144, 144, 144)",
      "text-decoration": "none",
    });
  });

  // Save 10 items to local storage
  let itemsToSave = [
    { id: 1, name: "The Great Gatsby", price: 12.99 },
    { id: 2, name: "To Kill a Mockingbird", price: 15.49 },
    { id: 3, name: "1984", price: 10.99 },
    { id: 4, name: "The Brothers Karamazov", price: 14.99 },
    { id: 5, name: "The Catcher in the Rye", price: 13.49 },
    { id: 6, name: "One Hundred Years of Solitude", price: 18.99 },
    { id: 7, name: "The Hobbit", price: 16.99 },
    { id: 8, name: "The Lord of the Rings", price: 24.99 },
    { id: 9, name: "The Alchemist", price: 9.99 },
    { id: 10, name: "Harry Potter and the Sorcerer's Stone", price: 21.99 },
  ];

  // Convert the array to a JSON string and save it to local storage
  localStorage.setItem("items", JSON.stringify(itemsToSave));

  // Retrieve the data from local storage and parse it back to an array
  let retrievedItems = JSON.parse(localStorage.getItem("items"));

  // Example: Display the retrieved data in the console
  console.log("LocalStorage Itemes:", retrievedItems);
});
