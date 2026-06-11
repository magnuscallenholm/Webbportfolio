const contactSection = document.querySelector("#contact");
const packageSection = document.querySelector("#package");
const packageCard = document.querySelector("#packageCard");
const mailButton = document.querySelector(".package-btn-mail");
const contactBackBtn = document.querySelector("#contactBackBtn");

// Shows the contact form and scrolls it into view
mailButton.addEventListener("click", function () {
  document.body.classList.add("contact-mode");

  contactSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

// Removes contact mode so the package section becomes visible again
contactBackBtn.addEventListener("click", function () {
  document.body.classList.remove("contact-mode");

  // Make sure package is showing front side
  packageCard.classList.remove("is-flipped");

  requestAnimationFrame(function () {
    packageSection.scrollIntoView({
      behavior: "auto",
      block: "start",
    });
  });
});

// Shows the hidden contact form when the page loads with #contact in the URL
// Used when links from thanks.html or the footer point to index.html#contact
if (window.location.hash === "#contact") {
  document.body.classList.add("contact-mode");

  contactSection.scrollIntoView({
    behavior: "auto",
    block: "start",
  });
}
