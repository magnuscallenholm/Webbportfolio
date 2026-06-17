const contactSection = document.querySelector("#contact");
const contactPackageSection = document.querySelector("#package");
const contactPackageCard = document.querySelector("#packageCard");

const contactMailButton = document.querySelector(".package-btn-mail");
const footerMailLink = document.querySelector(".footer-mail-link");
const contactBackBtn = document.querySelector("#contactBackBtn");

const contactCvPanel = document.querySelector("#cv-panel");
const contactProjectsPanel = document.querySelector("#projects-panel");

function hideContactBackPanels() {
  contactCvPanel.classList.remove("is-active");
  contactProjectsPanel.classList.remove("is-active");
}

// Shows the contact form and scrolls it into view.
function openContact(event) {
  if (event) {
    event.preventDefault();
  }

  document.body.classList.remove("about-mode");
  document.body.classList.remove("skills-mode");
  document.body.classList.remove("experience-mode");
  document.body.classList.remove("references-mode");

  contactPackageCard.classList.remove("is-flipped");
  hideContactBackPanels();

  document.body.classList.add("contact-mode");

  contactSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

contactMailButton.addEventListener("click", openContact);

if (footerMailLink) {
  footerMailLink.addEventListener("click", openContact);
}

// Removes contact mode so the package section becomes visible again.
contactBackBtn.addEventListener("click", function () {
  document.body.classList.remove("contact-mode");

  contactPackageCard.classList.remove("is-flipped");
  hideContactBackPanels();

  requestAnimationFrame(function () {
    contactPackageSection.scrollIntoView({
      behavior: "auto",
      block: "start",
    });
  });
});

// Shows the hidden contact form when the page loads with #contact in the URL.
if (window.location.hash === "#contact") {
  openContact();
}
