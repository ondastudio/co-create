document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth > 767) {
      const loyalswiper = new Swiper(".swiper.is-six-slider", {
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
    }
  });
  