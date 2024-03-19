
// Feature #1
// In your project, display the 
// current date andd time using JavaScript: Tuesday 16:00

let currentDate = document.querySelector("#day-time");

let current = new Date();
let minutes = current.getMinutes();
if (minutes < 10) {
    minutes = `0${current.getMinutes()}`;
}
let time;

if (current.getHours() === 12){
    time = `${current.getHours()}:${minutes}PM`;
} else if (current.getHours() > 12){
    time = `${current.getHours() - 12}:${minutes}PM`;
} else {
    time = `${current.getHours()}:${minutes}AM`;
}


let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];  

// Feature #2
// Add a search engine: a search bar with the button. 
// When searching for a city (i.e. Paris), display the current
// city name on the page after the user submits the form.


function search(event){
    event.preventDefault();
    let cityTyped = document.querySelector("#search-input");
    let cityName = document.querySelector("#current-city");
    cityName.innerHTML = cityTyped.value;
    currentDate.innerHTML = `${days[current.getDay()]} ${time}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
