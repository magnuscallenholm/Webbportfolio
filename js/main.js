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

//FOOTER
const homeLinks = document.querySelectorAll('[data-action="go-home"]');

const packageCard = document.querySelector("#packageCard");
const packageSection = document.querySelector("#package");
const backToFrontBtn = document.querySelector("#backToFrontBtn");

//CV AND PROJECT PANEL
const cvPanel = document.querySelector("#cv-panel");
const projectsPanel = document.querySelector("#projects-panel");

//FLIP THE ACTIONFIGURE
const flipButtons = document.querySelectorAll('[data-action="flip-card"]');
const flipDelay = 400;
const flipAnimationTime = 1100;

//ABOUT: Shows the About me section.
aboutButton.addEventListener("click", function () {
  openPageMode("about-mode");
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

//SKILLS: Shows the Skills section.
skillsButton.addEventListener("click", function () {
  openPageMode("skills-mode");
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

//EXPERIENCE: Shows the Experience section.
experienceBtn.addEventListener("click", function () {
  openPageMode("experience-mode");
});

//EXPERIENCE: Removes experience mode so the package section becomes visible again with the flip and CV backside
experienceBackCvBtn.addEventListener("click", function () {
  clearPageModes();

  document.body.classList.add("package-focus-mode");

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

//REFERENCE: Shows the references section.
referencesBtn.addEventListener("click", function () {
  openPageMode("references-mode");
});

//REFERENCE: Removes references mode so the package section becomes visible again with the flip and CV backside.
referencesBackCvBtn.addEventListener("click", function () {
  clearPageModes();

  document.body.classList.add("package-focus-mode");

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
  }, flipAnimationTime);

  requestAnimationFrame(function () {
    packageSection.scrollIntoView({
      behavior: "auto",
      block: "start",
    });
  });
});

//PROJECTS: Shows the project section.
projectButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const projectName = button.dataset.project;

    if (projectName === "snake") {
      openPageMode("snake-project-mode");
    }

    if (projectName === "butterfly") {
      openPageMode("butterfly-project-mode");
    }
  });
});

//PROJECTS SNAKE/BUTTERFLY: Returns from project detail view to the projects menu on the backside.
projectBackProjectsBtns.forEach(function (button) {
  button.addEventListener("click", function () {
    clearPageModes();

    document.body.classList.add("package-focus-mode");

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
    }, flipAnimationTime);

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
  document.body.classList.remove("package-focus-mode");
}

function openPageMode(modeClass) {
  clearPageModes();
  document.body.classList.add(modeClass);

  requestAnimationFrame(function () {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  });
}

//mange (M) HOME BUTTON
homeLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    clearPageModes();

    packageCard.classList.remove("is-flipped");
    hideBackPanels();

    requestAnimationFrame(function () {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    });
  });
});

//FLIP BEHAVIOUR TIME and WHERE CV/PROJECTS
flipButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const sectionName = button.dataset.section;
    const shouldDelayFlip = button.dataset.flipDelay === "true";

    clearPageModes();
    hideBackPanels();

    packageCard.classList.remove("is-flipped");

    if (sectionName === "cv") {
      cvPanel.classList.add("is-active");
    }

    if (sectionName === "projects") {
      projectsPanel.classList.add("is-active");
    }

    packageSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    if (shouldDelayFlip) {
      // CTA-knappar: låt smooth scroll hända först.
      setTimeout(function () {
        document.body.classList.add("package-focus-mode");
        packageCard.classList.add("is-flipped");
      }, flipDelay);
    } else {
      // Paketets egna knappar: flippa direkt.
      document.body.classList.add("package-focus-mode");
      packageCard.classList.add("is-flipped");
    }
  });
});

//FLIP BACK BUTTON
backToFrontBtn.addEventListener("click", function () {
  packageCard.classList.remove("is-flipped");

  // Wait until the flip animation is finished before hiding the back content.
  setTimeout(function () {
    hideBackPanels();
  }, flipAnimationTime);
});
