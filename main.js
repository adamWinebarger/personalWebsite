// //Stuff for blowing out the images
// $(".slider-images img").click(function() {
//   $("#full-image").attr("src",
//     $(this).attr("src"));
//   $("#image-viewer").show();
// });
//
// $("#image-viewer .close").click(function() {
//   $('#image-viewer').hide();
// });

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

  img.addEventListener("mouseup", function() {
    var timeUp = Date.now(); //We definitely need to come back and fix this
    if (timeUp - timeDown < 200) {
      fullImage.src = img.src;
      imageViewer.style.display = "block";
    }
  })
});

closeButton.addEventListener("click", function() {
  imageViewer.style.display = "none";
});

// Add click event listener to the document
imageViewer.addEventListener("click", function(event) {
  // Check if the clicked element is outside of the image modal
  if (event.target !== fullImage) {
    imageViewer.style.display = "none";
  }
});

//Driver code
console.log("Main.js loaded");
