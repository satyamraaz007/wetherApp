const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
const cityName = document.getElementById("city-name");
const weatherIcon = document.getElementById("weather-icon");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const weatherContainer = document.querySelector(".weather-container");

searchBtn.addEventListener("click", () => {
  const apiKey = "aca68cc22a76d26bac6855923ca01c8";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchBox.value}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        alert("City not found");
        return;
      }

      cityName.textContent = data.name;
      weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">`;
      temperature.textContent = `${data.main.temp}°C`;
      description.textContent = data.weather[0].description;
      weatherContainer.style.display = "block";
    })
    .catch((error) => {
      alert("Error fetching data");
      console.error(error);
    });
});
