url = "https://jsonplaceholder.typicode.com/posts/";

logResponse = function(response) {
    console.log(response);
}

fetch(url).then(
    logResponse(response)
);

