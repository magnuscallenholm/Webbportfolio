const weatherCity = document.querySelector("#weatherCity");
const weatherIcon = document.querySelector("#weatherIcon");
const weatherTemp = document.querySelector("#weatherTemp");

const apiKey = "1a39d5351731cb017d45c9b32dc5941e";
const city = "Stockholm,SE";

async function getWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Could not fetch weather data");
    }

    const data = await response.json();

    const temperature = Math.round(data.main.temp);
    const iconCode = data.weather[0].icon;
    const description = data.weather[0].description;

    weatherCity.textContent = "Stockholm";
    weatherTemp.textContent = `${temperature}°C`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.alt = description;
  } catch (error) {
    console.error(error);

    weatherCity.textContent = "Stockholm";
    weatherTemp.textContent = "--°C";
    weatherIcon.alt = "Weather unavailable";
  }
}

getWeather();
