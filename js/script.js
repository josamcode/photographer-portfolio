  /* ==========================================
              scroll To Top
  ========================================== */

  function scrollToTop() {
    window.scrollTo({
      top: 0,
    });
  }

  /* ==========================================
              Header funcs
  ========================================== */

  let toggleIconContainer = document.querySelector(".toggle-icon-container");
  let navLinks = document.querySelector(".header-links");
  let barsLineOne = document.getElementById("bars-line-one");
  let barsLineTwo = document.getElementById("bars-line-two");
  let shortLine = document.getElementById("short-line");

  toggleIconContainer.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
      barsLineOne.style.transform = "rotate(45deg)";
      barsLineTwo.style.transform = "rotate(-45deg)";
      shortLine.style.opacity = "0";
    } else {
      barsLineOne.style.transform = "rotate(0deg)";
      barsLineTwo.style.transform = "rotate(0deg)";
      shortLine.style.opacity = "1";
    }
  });

  function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({});
    }
  }

  function gotopage(url) {
    window.location.href = url;
  }
