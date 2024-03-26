let now = new Date();

let h3 = document.querySelector("h3");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = now.getDay(); 
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = now.getMonth();

let timeAMPM;
if(hours === 12){
    timeAMPM = `12:${minutes}PM`;
} else if (hours > 12){
    timeAMPM = `${hours - 12}:${minutes}PM`;
} else {
    timeAMPM = `${hours}:${minutes}AM`;
}

h3.innerHTML = `${weekDays[day]}, ${months[month]} ${date}, ${year} ${timeAMPM}`;

