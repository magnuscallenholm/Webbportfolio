const aboutButton = document.querySelector(".package-btn-aboutme");
const aboutSection = document.querySelector("#about");
const aboutBackBtn = document.querySelector("#aboutBackBtn");

// Shows the About me section and scrolls it into view.
aboutButton.addEventListener("click", function () {
  document.body.classList.remove("contact-mode");
  document.body.classList.add("about-mode");

  aboutSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

// Removes about mode so the package section becomes visible again.
aboutBackBtn.addEventListener("click", function () {
  document.body.classList.remove("about-mode");

  requestAnimationFrame(function () {
    packageSection.scrollIntoView({
      behavior: "auto",
      block: "start",
    });
  });
});
