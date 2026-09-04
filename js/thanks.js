const savedLanguage = (
  localStorage.getItem("portfolio-language") || "en"
).toLowerCase();

const isSwedish = savedLanguage.startsWith("sv");

const thanksTitle = document.querySelector("#thanksTitle");
const thanksMessage = document.querySelector("#thanksMessage");
const thanksButton = document.querySelector("#thanksButton");

document.documentElement.lang = isSwedish ? "sv" : "en";

if (isSwedish) {
  document.title = "Tack | Magnus Callenholm";
  thanksTitle.textContent = "Tack!";
  thanksMessage.textContent = "Ditt meddelande har skickats.";
  thanksButton.textContent = "Tillbaka till portfolion";
} else {
  document.title = "Thank you | Magnus Callenholm";
  thanksTitle.textContent = "Thank you!";
  thanksMessage.textContent = "Your message has been sent successfully.";
  thanksButton.textContent = "Back to portfolio";
}
