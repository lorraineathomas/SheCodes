function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperatureValue = Math.round(convertTemperature(response.data.temperature.current));
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind-speed");
    timeElement = document.querySelector(".time");
    let dayTime = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon");

    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML = `${days[dayTime.getDay()]} ${dayTime.getHours()}:${minutes}`;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = response.data.temperature.humidity;
    windElement.innerHTML = speed;
    temperatureElement.innerHTML = temperatureValue;
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
    let speed = Math.round(response.data.wind.speed * 1.609344); 

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
        ];
    let minutes = dayTime.getMinutes();
    if (minutes < 10) {
        minutes = `0${dayTime.getMinutes()}`;
    }

}

function convertTemperature(celcius){
    let temp = 9/5 * celcius + 32;
    return temp;
}

function searchCity(city){
let apiKey = "73a673doafc73bccb4ff04ct60632486";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    searchCity(searchInput.value);
}

function displayForecast() {
    let days = ["Sat", "Sun", "Mon", "Tues", "Wed"];
    let forecastHtml = "";

    days.forEach(function (day) {
        forecastHtml = 
            forecastHtml + 
        `
            <div class="weather-forecast-day">
                <div class="weather-forecast-date">${day}</div>
                <div class="weather-forecast-icon">🌤️</div>
                <div class="weather-forecast-temperature">
                    <strong>67°</strong>
                </div>
                <div class="weather-forecast-temperature">61°</div>
                </div>
            </div>
            `;
    }
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);