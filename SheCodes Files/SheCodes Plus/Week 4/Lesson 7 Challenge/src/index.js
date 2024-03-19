// Challenge 1
// Log li with id special
let specialCountry = document.querySelector("#special");
console.log(specialCountry);

// Challenge 2
// Log all li with class of country
console.log(document.querySelectorAll(".country"));

// Challenge 3
// Add class special to the li with id special
specialCountry.classList.add("special");

// Challenge 4
// In your code, replace the content of the element with 
// id special with your favorite country (other than Portugal of course)
let favorite = document.querySelector("#special");
favorite.innerHTML = "<strong>Jamaica 🇯🇲</strong>";