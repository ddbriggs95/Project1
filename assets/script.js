//create search bar element
var searchBar = document.getElementsByClassName(".form-control");

//variable for getting value user types in search
var input = document.querySelector('input[type="search"]');

input.addEventListener("click", function (event) {
  console.log("");
});

var requestUrl = "https://api.api-ninjas.com/v1/dogs?name=";

fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function)

