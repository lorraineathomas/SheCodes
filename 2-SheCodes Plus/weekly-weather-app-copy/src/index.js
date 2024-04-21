function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind-speed");
    timeElement = document.querySelector(".time");
    let iconElement = document.querySelector("#icon");


    let temperatureValue = Math.round(convertTemperature(response.data.temperature.current));
    let speed = Math.round(response.data.wind.speed * 1.609344);
    let dayTime = new Date(response.data.time * 1000);
    
    temperatureElement.innerHTML = temperatureValue;
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = response.data.temperature.humidity;
    windElement.innerHTML = speed;
    timeElement.innerHTML = `${days[dayTime.getDay()]} ${dayTime.getHours()}:${minutes}`;
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;

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

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);