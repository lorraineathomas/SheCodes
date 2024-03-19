// Challenge 1
function happyAlert(){
    alert("Hooray!");
}

let buttonClick = document.querySelector("#click-button");
buttonClick.addEventListener("click", happyAlert);

// Challenge 2
function passwordEntered(event){
    event.preventDefault();
    let passwordAlert = document.querySelector("#password-input");
    alert(`${passwordAlert.value}`);
}
let passwordValue = document.querySelector("#sign-button");
passwordValue.addEventListener("click", passwordEntered);

// Challenge 3
function alertUsernameEmail(event){
    event.preventDefault();

    let usernameInput = document.querySelector("#username-id");
    let emailInput = document.querySelector("#email-id");    

    alert(`Username: ${usernameInput.value} Email: ${emailInput.value}`);
}

let usernameEmailAlert = document.querySelector("#sign-id");
usernameEmailAlert.addEventListener("click", alertUsernameEmail)
