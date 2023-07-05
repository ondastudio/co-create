document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth > 991) {
      gsap.registerPlugin(ScrollTrigger);
  
      const flipContaienr = document.querySelector(".case-flip_component");
  
      const hideNav = new gsap.timeline({
        defaults: {
          duration: 0.5
        }
      });
      hideNav.paused(true);
  
      hideNav.to(".case-nav", { opacity: 0 });
  
      const flipCards = new gsap.timeline({
        defaults: {
          // duration: 1,
          ease: "none"
        },
        scrollTrigger: {
          trigger: ".case-flip_track",
          start: "top top+=200px",
          end: "bottom bottom+=200px",
          scrub: 1,
          onEnter: () => {
            hideNav.restart();
          },
          onLeave: () => {
            hideNav.reverse();
          },
          onEnterBack: () => {
            hideNav.restart();
          },
          onLeaveBack: () => {
            hideNav.reverse();
          }
        }
      });
  
      flipCards.to(flipContaienr, { rotateX: "-180deg" });
    }
  });
  