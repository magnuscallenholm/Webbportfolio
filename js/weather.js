const weatherCity = document.querySelector("#weatherCity");
const weatherIcon = document.querySelector("#weatherIcon");
const weatherTemp = document.querySelector("#weatherTemp");

const apiKey = "1a39d5351731cb017d45c9b32dc5941e";
const city = "Stockholm,SE";

function getWeatherIcon(conditionId, windSpeed) {
  // Thunderstorm
  if (conditionId >= 200 && conditionId <= 232) {
    return "assets/icons/weather/07-thunderstorm.svg";
  }

  // Drizzle / light showers
  if (conditionId >= 300 && conditionId <= 321) {
    return "assets/icons/weather/05-light-rain-showers.svg";
  }

  // Light/medium rain
  if (conditionId >= 500 && conditionId <= 504) {
    return "assets/icons/weather/05-light-rain-showers.svg";
  }

  // Freezing rain / heavy rain / showers
  if (conditionId >= 511 && conditionId <= 531) {
    return "assets/icons/weather/06-rain.svg";
  }

  // Snow
  if (conditionId >= 600 && conditionId <= 602) {
    return "assets/icons/weather/08-snow.svg";
  }

  // Sleet / rain and snow
  if (conditionId >= 611 && conditionId <= 616) {
    return "assets/icons/weather/09-sleet.svg";
  }

  // Snow showers
  if (conditionId >= 620 && conditionId <= 622) {
    return "assets/icons/weather/10-snow-showers.svg";
  }

  // Mist / fog / haze
  if (conditionId >= 701 && conditionId <= 781) {
    return "assets/icons/weather/11-fog.svg";
  }

  // Optional: if it is very windy, show wind icon.
  // OpenWeather wind speed is usually in meter/second.
  if (windSpeed >= 10) {
    return "assets/icons/weather/12-windy.svg";
  }

  // Clear sky
  if (conditionId === 800) {
    return "assets/icons/weather/01-clear-day.svg";
  }

  // Few clouds
  if (conditionId === 801) {
    return "assets/icons/weather/02-partly-cloudy-day.svg";
  }

  // Scattered clouds
  if (conditionId === 802) {
    return "assets/icons/weather/03-mostly-cloudy-day.svg";
  }

  // Broken / overcast clouds
  if (conditionId === 803 || conditionId === 804) {
    return "assets/icons/weather/04-cloudy.svg";
  }

  // Fallback
  return "assets/icons/weather/04-cloudy.svg";
}

async function getWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Could not fetch weather data");
    }

    const data = await response.json();

    const temperature = Math.round(data.main.temp);
    const conditionId = data.weather[0].id;
    const description = data.weather[0].description;
    const windSpeed = data.wind.speed;

    weatherCity.textContent = data.name;
    weatherTemp.textContent = `${temperature}°C`;
    weatherIcon.src = getWeatherIcon(conditionId, windSpeed);
    weatherIcon.alt = description;
  } catch (error) {
    console.error(error);

    weatherCity.textContent = "Stockholm";
    weatherTemp.textContent = "--°C";
    weatherIcon.src = "assets/icons/weather/04-cloudy.svg";
    weatherIcon.alt = "Weather unavailable";
  }
}

getWeather();
