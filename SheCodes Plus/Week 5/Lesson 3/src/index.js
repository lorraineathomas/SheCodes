function displayUsername(response){
    let h1 = document.querySelector("h1");

   /* response.data.array.forEach(element => {

    });*/
    h1.innerHTML = `Hi, ${response.data[0].username}`;
}

let apiUrl = "https://jsonplaceholder.typicode.com/users/";

axios.get(apiUrl).then(displayUsername);