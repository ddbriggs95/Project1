//create search bar input element variable
var searchInput = document.getElementById("inputSearch");

searchInput.textContent = searchInput;

//create variable for search button
var searchForm = document.getElementById("searchForm");

//get info container
var infoContainer = $("#info-container");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = searchInput.value;
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/dogs?name=" + name,
    headers: { "X-Api-Key": "mqKr1tVSEBPOaMBbzLeEEw==2NIz37K5FR2fO4sE" },
    contentType: "application/json",
    success: function (data) {
      //creating list and elements in container
      $(infoContainer).html(""); //to make container empty for the next search results to be shown in the same container

      var infoListEl = document.createElement("ul");
      infoContainer.append(infoListEl);
      console.log(infoListEl);
      console.log(data);
      //create new items for each dog info to display to container in a list
      var infoListItem1 = document.createElement("li");
      infoListEl.append(infoListItem1);

      infoListItem1.textContent = "name: " + data[0].name;

      var infoListItem2 = document.createElement("li");
      infoListItem2.innerHTML = "Barking: " + createRating(5); //for star rating
      infoListEl.append(infoListItem2);
      starRating(infoListItem2, data[0].barking); //for star rating
      // infoListItem2.textContent = "barking: " + data[0].barking;

      var infoListItem3 = document.createElement("li");
      infoListItem3.innerHTML = "Energy: " + createRating(5); //for star rating
      infoListEl.append(infoListItem3);
      starRating(infoListItem3, data[0].energy); //for star rating
      // infoListItem3.textContent = "energy: " + data[0].energy;

      var infoListItem4 = document.createElement("li");
      infoListItem4.innerHTML = "Shedding: " + createRating(5); //for star rating
      infoListEl.append(infoListItem4);
      starRating(infoListItem4, data[0].shedding); //for star rating
      // infoListItem4.textContent = "shedding: " + data[0].shedding;

      var infoListItem5 = document.createElement("li");
      infoListItem5.innerHTML = "Protectiveness: " + createRating(5); //for star rating
      infoListEl.append(infoListItem5);
      starRating(infoListItem5, data[0].protectiveness); //for star rating
      // infoListItem5.textContent = "protectiveness: " + data[0].protectiveness;

     
      var infoListItem7 = document.createElement("li");
      infoListItem7.innerHTML = "Drooling: " + createRating(5); //for star rating
      infoListEl.append(infoListItem7);
      starRating(infoListItem7, data[0].drooling); //for star rating
      // infoListItem7.textContent = "drooling : " + data[0].drooling;
     
     
      var infoListItem6 = document.createElement("li");
      infoListEl.append(infoListItem6);
      infoListItem6.textContent =
        "life expectancy: " + data[0].max_life_expectancy + "years";

     
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
});

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

// for star rating begins

// to make the stars for each li item
function createRating() {
  var starsDiv = `<div class="star-rating">
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
</div>`;
  return starsDiv;
}

// to check stars based on the score coming from API
function starRating(infoListItem, score) {
  let allStars = $(infoListItem).find(".fa-star");

  for (let i = 0; i < score; i++) {
    $(allStars[i]).addClass("checked");
  }
}
// for star rating ends
