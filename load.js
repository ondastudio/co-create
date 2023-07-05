// LOAD JS

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    gsap.to(".page-load", {
      opacity: 0,
      duration: 0.5
    });
  }, 500);
});
