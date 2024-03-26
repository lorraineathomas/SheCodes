let current = new Date();


// JS Challenge 1
// Log the current date
console.log(current.getDate());

// JS Challenge 2
// Log the number of milliseconds in the current time
console.log(current.getMilliseconds());

// JS Challenge 3
// Log the current day
let days = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];
console.log(days[current.getDay()]);

// JS Challenge 4
// Log the current year
console.log(current.getFullYear());

// JS Challenge 5
// Log the current month
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[current.getMonth()]);

// JS Challenge 6
// Display the current date following this format: Today is Thursday, April 4, 2020
console.log(`Today is ${days[current.getDay()]}, ${months[current.getMonth()]} ${current.getDate()}, ${current.getFullYear()}.`);


// JS Challenge 7
// Create a function formatDate which returns a date following this format: Thursday, April 4, 2020. Call this function with the current time. Log the result in this format: console.log(formatDate(new Date()));
 function formatDate(dateObject) {
    let today = `Today is ${days[dateObject.getDay()]}, ${months[dateObject.getMonth()]} ${dateObject.getDate()}, ${dateObject.getFullYear()}.`;
    return today;
 } 
 console.log(formatDate(new Date()));
