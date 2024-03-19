// Challenge 1
// index.html Line 6

// Challenge 2
function logComments(response){
    console.log(response.data);
}

let apiUrl = "https://jsonplaceholder.typicode.com/comments";

axios.get(apiUrl).then(logComments);

// Challenge 3
    //Solution 1
    function logResponse(response){
        console.log(response.data);
    }
    let apiUrlFirst = "https://jsonplaceholder.typicode.com/comments/1";
    axios.get(apiUrlFirst).then(logResponse);

    //Solution 2
    function logFirstComment(response){
        console.log(response.data[0]);
    }

    axios.get(apiUrl).then(logFirstComment);