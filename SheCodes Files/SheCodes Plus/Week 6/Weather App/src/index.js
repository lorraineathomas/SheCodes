function convertCeltoFahrenheit(celcius){
     let fahrenheit = 9/5 * celcius + 32;
     return Math.round(fahrenheit);
}

function showCityTemperature(response) {
    console.log(response.data);
    let temperature = document.querySelector(".current-temperature-value");
    let currentTemperature = Math.round(response.data.temperature.current);
    let city = document.querySelector("#current-city");
    city.innerHTML = response.data.city;
    temperature.innerHTML = convertCeltoFahrenheit(currentTemperature);
} 

function search(event){
    event.preventDefault();
    let searchCity = document.querySelector("#search-input");
    let cityTyped = searchCity.value;

    let apiKey = "73a673doafc73bccb4ff04ct60632486";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityTyped}&key=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(showCityTemperature);
}
    
let changeCityTemperature = document.querySelector("#search-button");
changeCityTemperature.addEventListener("click", search);