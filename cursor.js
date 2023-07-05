//CURSOR JS

document.addEventListener("DOMContentLoaded", () => {
  const cursorMove = document.querySelector(".cursor-move.is-index");
  const cursorDot = document.querySelector(".cursor-dot.is-index");

  const indexSwiper = document.querySelector(".index-slider_component");

  indexSwiper.onmouseenter = () => {
    // cursorDot.classList.add("is-active");
  };

  indexSwiper.onmouseleave = () => {
    // cursorDot.classList.remove("is-active");
  };

  window.onpointermove = (e) => {
    cursorMove.style.transform = translate3d(calc(${e.clientX}px - 50vw), calc(${e.clientY}px - 50vh), 0);
  };

  const sliders = [...document.querySelectorAll(".swiper-slide.is-bg")];

  sliders.forEach((slider) => {
    const stateParent = slider.querySelector(".cursor-state");
    const stateChild = stateParent.querySelector(".w-condition-invisible");

    if (stateChild.classList.contains("active")) {
      slider.setAttribute("state", "inactive");
    } else {
      slider.setAttribute("state", "active");
    }

    slider.onpointerenter = () => {
      cursorDot.classList.add("is-active");
      if (slider.getAttribute("state") === "active") {
        cursorDot.classList.remove("coming-soon");
      }
    };

    slider.onpointerleave = () => {
      cursorDot.classList.remove("is-active");
      if (slider.getAttribute("state") === "active") {
        cursorDot.classList.add("coming-soon");
      }
    };
  });
});
