function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input");
    //console.log(searchInput.value);

    let h2 = document.querySelector("h2");
    if(searchInput.value){
        h2.innerHTML = `Searching for ${searchInput.value}...`;
    } else {
        h2.innerHTML = null;
        alert("Please type in a city name");
    }
}

let form = document.querySelector("#search-form");

form.addEventListener("submit", search);