const sliderM2 = document.querySelector(".blaze-slider");

const blazeSlider = new BlazeSlider(sliderM2, {
  all: {
    enableAutoplay: true,
    slidesToScroll: 6,
    slidesToShow: 3,
    transitionDuration: 3000,
    autoplayInterval: 12000,
    loop: true,
    draggable: true
  },
  "(max-width: 75em)": {
    slidesToShow: 2,
    slidesToScroll: 2,
    slidesGap: "5vh"
  },
  "(max-width: 48em)": {
    slidesToShow: 1,
    slidesToScroll: 2
  }
});

// listen for slide event
blazeSlider.onSlide(
  (pageIndex, firstVisibleSlideIndex, lastVisibleSlideIndex) => {
    // console.log({
    //   pageIndex,
    //   firstVisibleSlideIndex,
    //   lastVisibleSlideIndex
    // });
  }
);

//Ok this is how we should actually do it
var sliderImages = document.querySelectorAll(".blaze-slider .slider-images");
var fullImage = document.getElementById("full-image");
var imageViewer = document.getElementById("image-viewer");
var closeButton = document.querySelector("#image-viewer .close");

// Add event listeners
sliderImages.forEach(function(img) {
  var timeDown = 0;
  img.addEventListener("mousedown", function() {
    //fullImage.src = img.src;
    //imageViewer.style.display = "block";
    timeDown = Date.now(); //wow this is janky
    console.log("Banana")
  });

  //Kind of a jank way to view our photos when things aren't sliding.
  //Since we're getting a bit of overlap with the navbar, I'm just going to make it
  //so the thing is invisible when they view one of those photos.
  //
  // Also added in functionality to make it reappear when someone destroys one of the photos.
  img.addEventListener("mouseup", function() {
    var timeUp = Date.now(); //We definitely need to come back and fix this
    if (timeUp - timeDown < 200) {
      fullImage.src = img.src;
      imageViewer.style.display = "flex";

      let header = document.getElementById("homePageHeader")
      header.style.visibility = "hidden"
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'; //This might lock scrolling
    }
  })
});

//This is for our close button functionality.
closeButton.addEventListener("click", function() {
  imageViewer.style.display = "none";
  let header = document.getElementById("homePageHeader")
  header.style.visibility = "visible"
  document.getElementsByTagName('body')[0].style.overflow = 'visible';
});

// Add click event listener to the document
imageViewer.addEventListener("click", function(event) {
  // Check if the clicked element is outside of the image modal
  if (event.target !== fullImage) {
    imageViewer.style.display = "none";
    let header = document.getElementById("homePageHeader")
    header.style.visibility = "visible"
    document.getElementsByTagName('body')[0].style.overflow = 'visible';
  }
});

console.log("slider.js loaded")
