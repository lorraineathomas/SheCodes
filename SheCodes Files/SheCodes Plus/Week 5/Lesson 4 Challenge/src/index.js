//JS Challenge 1
//Import Axios

//JS Challenge 2
//Get your API key and save ina variable called apiKey
let apiKey = "73a673doafc73bccb4ff04ct60632486";

//JS Challenge 3
//Get the API response for the weather in Sydney, using metrics unit
let city = "Sydney";
function logResponse(response){
    console.log(response.data.temperature);
}
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(logResponse);

//JS Challenge 4
//Log the current temperature in Sydney
function logCurrentTemp(response){
    console.log(response.data.temperature.current);
}
axios.get(apiUrl).then(logCurrentTemp);
    
//JS Challenge 5
//Replace the h1 of this page with the weather in Sydney i.e. it is 19 degrees in Sydney
function weather(response){
    let h1 = document.querySelector("#headline");
    let currentTemperature = Math.round(response.data.temperature.current);
    h1.innerHTML = `It is ${currentTemperature}&deg;C in ${city}`;
}
axios.get(apiUrl).then(weather);