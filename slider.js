//SLIDER

document.addEventListener("DOMContentLoaded", () => {
  // const sliders = [...document.querySelectorAll(".swiper-slide.is-bg")];
  // console.log(sliders.length);

  const bgSwiper = new Swiper(".swiper.is-bg", {
    // effect: "creative",
    effect: "slide",
    centeredSlides: true,
    speed: 600,
    slidesPerView: "auto",
    // loop: true,
    // initialSlide: 1,
    // loopedSlides: 2,
    keyboard: true,
    slideActiveClass: "is-active",
    slideNextClass: "is-next",
    slidePrevClass: "is-prev",
    slideToClickedSlide: true,

    pagination: {
      el: ".swiper-pagination.is-index",
      type: "bullets",
      bulletClass: "swiper-bullet",
      bulletActiveClass: "is-active",
      bulletElement: "div",
      clickable: true
    }
  });

  const textSwiper = new Swiper(".swiper.is-text", {
    // effect: "creative",
    effect: "slide",
    // effect: "creative",
    direction: "vertical",
    centeredSlides: false,
    speed: 600,
    slidesPerView: "auto"
    // loop: true,
    // initialSlide: 1,

    // loopedSlides: 2
    // keyboard: true,
    // creativeEffect: {
    //   prev: {
    //     // will set translateZ(-400px) on previous slides
    //     translate: [0, "-100%", 400]
    //   },
    //   next: {
    //     // will set translateX(100%) on next slides
    //     translate: [0, "100%", 400]
    //   }
    // }
  });

  bgSwiper.controller.control = textSwiper;
  textSwiper.controller.control = bgSwiper;

  //slide change animations
  // bgSwiper.on("slideChangeTransitionStart", () => {
  //   console.log("start");
  // });

  // bgSwiper.on("slideChangeTransitionEnd", () => {
  //   console.log("end");
  // });

  // bgSwiper.on("slideChange", () => {
  //   console.log(document.querySelector(".swiper-slide.is-bg.is-active"));
  // });
});
