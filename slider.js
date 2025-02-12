const sliderEl = document.querySelector(".blaze-slider");

const blazeSlider = new BlazeSlider(sliderEl, {
  all: {
    enableAutoplay: true,
    slidesToScroll: 6,
    slidesToShow: 3,
    transitionDuration: 10000,
    autoplayInterval: 5000,
    loop: true,
    draggable: true
  },
  "(max-width: 60em)": {
    slidesToShow: 2,
    slidesToScroll: 4,
    slidesGap: "5vh"
  },
  "(max-width: 30em)": {
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
