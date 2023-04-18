//create search bar input element variable
var searchInput = document.getElementById("inputSearch");
// console.log(searchInput);
searchInput.textContent = searchInput;

//create variable for search button
var searchForm = document.getElementById("searchForm");
//console.log(searchInput);

// get img container
var imgContainer = $("#img-container");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(searchInput.value);

  var name = searchInput.value;
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/dogs?name=" + name,
    headers: { "X-Api-Key": "mqKr1tVSEBPOaMBbzLeEEw==2NIz37K5FR2fO4sE" },
    contentType: "application/json",
    success: function (result) {
      console.log(result);
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });

  //   fetch for image
  var imgUrl = "https://dog.ceo/api/breed/" + name + "/images/random";
  fetch(imgUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log("data :>> ", data);
      $(imgContainer).html(
        "<img src=" + data.message + ` alt=' ${name} picture' width=200 >`
      );
    });
});
