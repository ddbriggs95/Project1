//create search bar input element variable
var searchInput = document.getElementById("inputSearch");
console.log(searchInput);
searchInput.textContent= searchInput;

//create variable for search button
var searchForm = document.getElementById("searchForm");
//console.log(searchInput);

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(searchInput.value);

    var name = searchInput.value;
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/dogs?name=' + name,
        headers: { 'X-Api-Key': 'mqKr1tVSEBPOaMBbzLeEEw==2NIz37K5FR2fO4sE'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });


    
});





// fetch(requestUrl)
// .then(function (response) {
//     return response.json();
// })
// .then(function)

//fetch call to connect to api
