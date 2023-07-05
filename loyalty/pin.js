document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth > 991) {
      const firstSection = document.querySelector(".sticky-second");
      const secondSection = document.querySelector(".third-non-sticky-content");
  
      let firstHeight = Math.round(firstSection.getBoundingClientRect().height);
      let secondHeight = Math.round(secondSection.getBoundingClientRect().height);
  
      function updateHeight() {
        firstSection.style.height = `${(firstHeight + secondHeight) / 16}rem`;
        firstSection.style.marginBottom = `-${secondHeight / 16}rem`;
      }
  
      updateHeight();
  
      setTimeout(() => {
        updateHeight();
      }, 1000);
  
      window.onressize = () => {
        updateHeight();
      };
    }
  });
  