const aboutButton = document.querySelector(".package-btn-aboutme");
const aboutSection = document.querySelector("#about");
const aboutBackBtn = document.querySelector("#aboutBackBtn");

const skillsButton = document.querySelector(".package-btn-skills");
const skillsSection = document.querySelector("#skills");
const skillsBackBtn = document.querySelector("#skillsBackBtn");

//ABOUT: Shows the About me section and scrolls it into view. Remove/hide other sections.
aboutButton.addEventListener("click", function () {
  document.body.classList.remove("contact-mode");
  document.body.classList.remove("skills-mode");
  document.body.classList.add("about-mode");

  aboutSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

//ABOUT: Removes about mode so the package section becomes visible again.
aboutBackBtn.addEventListener("click", function () {
  document.body.classList.remove("about-mode");

  requestAnimationFrame(function () {
    packageSection.scrollIntoView({
      behavior: "auto",
      block: "start",
    });
  });
});

//SKILLS: Shows the Skills section and scrolls it into view. Remove/hide other sections.
skillsButton.addEventListener("click", function () {
  document.body.classList.remove("contact-mode");
  document.body.classList.remove("about-mode");
  document.body.classList.add("skills-mode");

  skillsSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

//SKILLS: Removes skills mode so the package section becomes visible again.
skillsBackBtn.addEventListener("click", function () {
  document.body.classList.remove("skills-mode");

  requestAnimationFrame(function () {
    packageSection.scrollIntoView({
      behavior: "auto",
      block: "start",
    });
  });
});
