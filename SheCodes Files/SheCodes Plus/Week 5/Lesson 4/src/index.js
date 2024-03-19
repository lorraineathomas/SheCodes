let city = "New York";
let apiKey = "73a673doafc73bccb4ff04ct60632486";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

let fahrenheit;
function convertCeltoFah(celcius){
     fahrenheit = 9/5 * celcius + 32;
     return fahrenheit;
}

function displayTemperature(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let country = response.data.country;
    let description = response.data.condition.description;
    temperatureElement.innerHTML = `The temperature in ${city}, ${country} is <strong>${Math.round(temperature)}&deg;C | ${Math.round(convertCeltoFah(temperature))}&deg;F</strong> with ${description}.`;
}

axios.get(apiUrl).then(displayTemperature);