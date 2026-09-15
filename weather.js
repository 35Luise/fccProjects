const citySelect = document.getElementById("city-select");
const getWeatherBtn = document.getElementById("get-weather-btn");
const weatherInfo = document.getElementById("weather-info");

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function showWeather(city) {
  try {
    const data = await getWeather(city);

    const weather = data.weather && data.weather[0];
    const main = data.main;
    const wind = data.wind;

    weatherInfo.style.display = "block";

    document.getElementById("weather-icon").src =
      weather?.icon || "";

    document.getElementById("weather-icon").alt =
      weather?.description || "Weather icon";

    document.getElementById("main-temperature").textContent =
      main?.temp ?? "N/A";

    document.getElementById("feels-like").textContent =
      main?.feels_like !== undefined
        ? `${main.feels_like} °C`
        : "N/A";

    document.getElementById("humidity").textContent =
      main?.humidity !== undefined
        ? `${main.humidity}%`
        : "N/A";

    document.getElementById("wind").textContent =
      wind?.speed !== undefined
        ? `${wind.speed} m/s`
        : "N/A";

    document.getElementById("wind-gust").textContent =
      wind?.gust !== undefined
        ? `${wind.gust} m/s`
        : "N/A";

    document.getElementById("weather-main").textContent =
      weather?.main ?? "N/A";

    document.getElementById("location").textContent =
      data.name ?? "N/A";

  } catch (error) {
    alert("Something went wrong, please try again later");
  }
}

getWeatherBtn.addEventListener("click", () => {
  const city = citySelect.value;

  if (!city) {
    return;
  }

  showWeather(city);
});