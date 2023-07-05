document.addEventListener("DOMContentLoaded", () => {
    const prodSwiper = new Swiper(".swiper.is-products", {
      effect: "slide",
      centeredSlides: false,
      speed: 600,
      slidesPerView: "auto",
      spaceBetween: 24,
      keyboard: true,
      autoplay: {
        delay: 5000
      }
    });
  });
  