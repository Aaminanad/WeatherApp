const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherDisplay = document.getElementById('weatherDisplay');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  } else {
    weatherDisplay.innerHTML = "Please enter a city ";
  }
});

async function getWeather(city) {
  const apiKey = "91ae8d6da7d04b03a6e175616251011"; 
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.location) {
    weatherDisplay.innerHTML = `
      <h2>${data.location.name}, ${data.location.country}</h2>
      <p>🌡️ Temp: ${data.current.temp_c}°C</p>
      <p>🌤️ Condition: ${data.current.condition.text}</p>
    `;
  } else {
    weatherDisplay.innerHTML = "City not found";
  }
}

