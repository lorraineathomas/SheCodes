// Challenge 1
// Add click eventListener to the button. Alert 'It is 18 degrees'.
function temperatureDisplay(){
    alert("It is 51 degrees");
}
let alertTemperature = document.querySelector("button");
alertTemperature.addEventListener("click", temperatureDisplay);


// Challenge 2
// When the button is clicked, replace the button label by '18
// degrees'.
function changeLabel(){
    let button = document.querySelector("button");
    button.innerHTML = "51 degrees";
}

let selectButton = document.querySelector("button");
selectButton.addEventListener("click", changeLabel);