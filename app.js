// smooth scrollup IIFE
(function () {
  const a = document.querySelectorAll("[data-smooth-scroll]");

  function scrollUp(targetId) {
    const targetSection = document.querySelector(targetId);
    const targetOffSetTop = targetSection.offsetTop;

    window.scrollTo({
      top: targetOffSetTop,
      behavior: "smooth",
    });
  }

  a.forEach((a) =>
    a.addEventListener("click", function (e) {
      e.preventDefault();
      scrollUp(this.getAttribute("href"));
    })
  );

  window.addEventListener("scroll", () => {
    const scrollUpButton = document.querySelector("#scroll-up");
    scrollUpButton.addEventListener("click", (e) => {
      e.preventDefault();
      scrollUp("nav");
    });

    const scrollPosition = window.scrollY;

    if (scrollPosition > 800) {
      scrollUpButton.classList.remove("hidden");
    } else {
      scrollUpButton.classList.add("hidden");
    }
  });
})();

// POPPUP FOR QUESTIONS IIFE
(function () {
  const li = document.querySelectorAll(".questions-li");

  li.forEach((li) => li.addEventListener("click", toggleP));

  function toggleP() {
    const p = this.querySelector("p");
    p.classList.toggle("hidden");
  }
})();

// CHANGING FEATURES CONTENT IIFE
(function () {
  const selectButtons = document.querySelectorAll(".features-select-button");
  const img = document.querySelector("[data-features-img]");
  const p = document.querySelector("[data-features-p]");
  const h3 = document.querySelector("[data-features-h3]");

  selectButtons.forEach((selectButton) => selectButton.addEventListener("click", changeFeatures));

  function changeFeatures() {
    for (let selectButton of selectButtons) {
      selectButton.classList.remove("active");
    }
    this.classList.add("active");
    if (this.innerText === "Simple Bookmarking") {
      img.src = "images/illustration-features-tab-1.svg";
      p.innerText =
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
      h3.innerText = "Bookmark in one click";
    } else if (this.innerText === "Speedy Searching") {
      img.src = "images/illustration-features-tab-2.svg";
      p.innerText =
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
      h3.innerText = "Intelligent Search";
    } else if (this.innerText === "Easy Sharing") {
      img.src = "images/illustration-features-tab-3.svg";
      p.innerText =
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
      h3.innerText = "Share your bookmarks";
    }
  }
})();
