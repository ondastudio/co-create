document.addEventListener("DOMContentLoaded", () => {
    //mobile nav
    const dropdownLinks = [...document.querySelectorAll(".dropdown-link")];
    const dropDownText = document.querySelector(".dropdown-text");
  
    function updateDropdown() {
      const currentLink = document.querySelector(".dropdown-link.w--current");
  
      if (currentLink) {
        dropDownText.innerHTML = currentLink.innerText;
      }
    }
  
    updateDropdown();
  
    const config = {
      attributeFilter: ["class"]
    };
  
    dropdownLinks.forEach((dropdown) => {
      const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
          if (mutation.attributeName === "class") {
            updateDropdown();
          }
        }
      };
  
      const observer = new MutationObserver(callback);
  
      observer.observe(dropdown, config);
    });
  });
  