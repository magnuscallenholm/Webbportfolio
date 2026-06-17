//About Me
const aboutButton = document.querySelector(".package-btn-aboutme");
const aboutSection = document.querySelector("#about");
const aboutBackBtn = document.querySelector("#aboutBackBtn");
//Skills
const skillsButton = document.querySelector(".package-btn-skills");
const skillsSection = document.querySelector("#skills");
const skillsBackBtn = document.querySelector("#skillsBackBtn");
//Experience
const experienceBtn = document.querySelector("#experienceBtn");
const experienceSection = document.querySelector("#experience");
const experienceBackCvBtn = document.querySelector("#experienceBackCvBtn");
const experienceBackPackageBtn = document.querySelector(
  "#experienceBackPackageBtn",
);
//References
const referencesBtn = document.querySelector("#referencesBtn");
const referencesSection = document.querySelector("#references");
const referencesBackCvBtn = document.querySelector("#referencesBackCvBtn");
const referencesBackPackageBtn = document.querySelector(
  "#referencesBackPackageBtn",
);

// Projects
const projectButtons = document.querySelectorAll(".project-card[data-project]");
const snakeProjectSection = document.querySelector("#snake-project");
const butterflyProjectSection = document.querySelector("#butterfly-project");

const projectBackProjectsBtns = document.querySelectorAll(
  ".project-back-projects-btn",
);

const projectBackPackageBtns = document.querySelectorAll(
  ".project-back-package-btn",
);

const packageCard = document.querySelector("#packageCard");
const packageSection = document.querySelector("#package");
const backToFrontBtn = document.querySelector("#backToFrontBtn");

const cvPanel = document.querySelector("#cv-panel");
const projectsPanel = document.querySelector("#projects-panel");

const flipButtons = document.querySelectorAll('[data-action="flip-card"]');

//ABOUT: Shows the About me section and scrolls it into view. Remove/hide other sections.
aboutButton.addEventListener("click", function () {
  clearPageModes();
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
  clearPageModes();
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

//EXPERIENCE: Shows the experience section and scrolls it into view. Remove/hide other sections.
experienceBtn.addEventListener("click", function () {
  clearPageModes();
  document.body.classList.add("experience-mode");

  experienceSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

//EXPERIENCE: Removes experience mode so the package section becomes visible again with the flip and CV backside
experienceBackCvBtn.addEventListener("click", function () {
  document.body.classList.remove("experience-mode");

  packageCard.classList.add("is-flipped");

  projectsPanel.classList.remove("is-active");
  cvPanel.classList.add("is-active");

  requestAnimationFrame(function () {
    packageSection.scrollIntoView({
      behavior: "auto",
      block: "start",
    });
  });
});

//EXPERIENCE: Removes experience mode so the package section becomes visible again.
experienceBackPackageBtn.addEventListener("click", function () {
  document.body.classList.remove("experience-mode");

  packageCard.classList.remove("is-flipped");

  cvPanel.classList.remove("is-active");
  projectsPanel.classList.remove("is-active");

  requestAnimationFrame(function () {
    packageSection.scrollIntoView({
      behavior: "auto",
      block: "start",
    });
  });
});

//REFERENCE: Shows the references section and scrolls it into view. Remove/hide other sections.
referencesBtn.addEventListener("click", function () {
  clearPageModes();
  document.body.classList.add("references-mode");

  referencesSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

//REFERENCE: Removes references mode so the package section becomes visible again with the flip and CV backside.
referencesBackCvBtn.addEventListener("click", function () {
  document.body.classList.remove("references-mode");

  packageCard.classList.add("is-flipped");

  projectsPanel.classList.remove("is-active");
  cvPanel.classList.add("is-active");

  requestAnimationFrame(function () {
    packageSection.scrollIntoView({
      behavior: "auto",
      block: "start",
    });
  });
});

//REFERENCE: Removes references mode so the package section becomes visible again.
referencesBackPackageBtn.addEventListener("click", function () {
  document.body.classList.remove("references-mode");

  packageCard.classList.remove("is-flipped");

  setTimeout(function () {
    hideBackPanels();
  }, 800);

  requestAnimationFrame(function () {
    packageSection.scrollIntoView({
      behavior: "auto",
      block: "start",
    });
  });
});

//PROJECTS SNAKE/BUTTERFLY: Shows the correct project section depending on which project card is clicked.
projectButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const projectName = button.dataset.project;

    clearPageModes();

    if (projectName === "snake") {
      document.body.classList.add("snake-project-mode");

      snakeProjectSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (projectName === "butterfly") {
      document.body.classList.add("butterfly-project-mode");

      butterflyProjectSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

//PROJECTS SNAKE/BUTTERFLY: Returns from project detail view to the projects menu on the backside.
projectBackProjectsBtns.forEach(function (button) {
  button.addEventListener("click", function () {
    clearPageModes();

    packageCard.classList.add("is-flipped");

    cvPanel.classList.remove("is-active");
    projectsPanel.classList.add("is-active");

    requestAnimationFrame(function () {
      packageSection.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    });
  });
});

// PROJECTS SNAKE/BUTTERFLY: Returns from project detail view to the package front side.
projectBackPackageBtns.forEach(function (button) {
  button.addEventListener("click", function () {
    clearPageModes();

    packageCard.classList.remove("is-flipped");

    setTimeout(function () {
      hideBackPanels();
    }, 800);

    requestAnimationFrame(function () {
      packageSection.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    });
  });
});

function hideBackPanels() {
  cvPanel.classList.remove("is-active");
  projectsPanel.classList.remove("is-active");
}

function clearPageModes() {
  document.body.classList.remove("about-mode");
  document.body.classList.remove("skills-mode");
  document.body.classList.remove("contact-mode");
  document.body.classList.remove("experience-mode");
  document.body.classList.remove("references-mode");
  document.body.classList.remove("snake-project-mode");
  document.body.classList.remove("butterfly-project-mode");
}

flipButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const sectionName = button.dataset.section;

    clearPageModes();
    hideBackPanels();

    if (sectionName === "cv") {
      cvPanel.classList.add("is-active");
    }

    if (sectionName === "projects") {
      projectsPanel.classList.add("is-active");
    }

    packageCard.classList.add("is-flipped");

    packageSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

backToFrontBtn.addEventListener("click", function () {
  packageCard.classList.remove("is-flipped");

  // Wait until the flip animation is finished before hiding the back content.
  setTimeout(function () {
    hideBackPanels();
  }, 800);
});
