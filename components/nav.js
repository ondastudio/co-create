document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth < 992) {
      const button = document.querySelector(".case-nav-button");
  
      const openNav = new gsap.timeline({
        defaults: {
          duration: 1,
          ease: "power2.out"
        }
      });
  
      openNav.paused(true);
  
      openNav
        .to(".case-nav_mobile-wrapper", {
          height: "100dvh",
          ease: "power2.inOut"
        })
        .from(
          [".case-nav_links, .case-nav_buttons"],
          {
            opacity: 0,
            y: "-4rem"
          },
          "<+=0.5"
        )
        .to(".case-nav-icon.close", { opacity: 1, duration: 0.5 }, "<")
        .to(".case-nav-icon.open", { opacity: 0, duration: 0.5 }, "<");
  
      button.onclick = () => {
        if (button.classList.contains("is-open")) {
          openNav.timeScale(1.5);
          openNav.reverse();
          button.classList.remove("is-open");
        } else {
          openNav.timeScale(1);
          openNav.restart();
          button.classList.add("is-open");
        }
      };
    }
  });
  