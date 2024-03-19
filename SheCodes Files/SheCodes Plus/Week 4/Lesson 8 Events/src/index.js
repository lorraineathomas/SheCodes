function follow(event){
    
    event.preventDefault();
    event.target.innerHTML = "Following";
}

let followLink = document.querySelector("#follow");
followLink.addEventListener("click", follow);