document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth < 768) {
      const caseSwiper = new Swiper(".swiper.is-case-studies", {
        effect: "slide",
        centeredSlides: false,
        speed: 600,
        slidesPerView: "auto",
        spaceBetween: 40,
        keyboard: true,
        autoplay: {
          delay: 5000
        }
      });
    }
  });
  