//create search bar input element variable
var searchInput = document.getElementById("inputSearch");
//console.log(searchInput);
searchInput.textContent= searchInput;

//create variable for search button
var searchForm = document.getElementById("searchForm");
//console.log(searchInput);

//get info container
var infoContainer = $("#info-container");

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    //console.log(searchInput.value);

    var name = searchInput.value;
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/dogs?name=' + name,
        headers: { 'X-Api-Key': 'mqKr1tVSEBPOaMBbzLeEEw==2NIz37K5FR2fO4sE'},
        contentType: 'application/json',
        success: function(data) {
            //console.log(data);
            //console.log(data[0].barking);
            //creating list and elements in container
            var infoListEl = document.createElement("ul");
            infoContainer.append(infoListEl);
            console.log(infoListEl);
          console.log(data);
          //create new items for each dog info to display to container in a list
            var infoListItem1 = document.createElement("li");
            infoListEl.append(infoListItem1);
            infoListItem1.textContent= "name: " + data[0].name;

            var infoListItem2 = document.createElement("li");
            infoListEl.append(infoListItem2);
            infoListItem2.textContent= "barking: " + data[0].barking;

            var infoListItem3 = document.createElement("li");
            infoListEl.append(infoListItem3);
            infoListItem3.textContent= "energy: " + data[0].energy;

            var infoListItem4 = document.createElement("li");
            infoListEl.append(infoListItem4);
            infoListItem4.textContent= "shedding: " + data[0].shedding;

            var infoListItem5 = document.createElement("li");
            infoListEl.append(infoListItem5);
            infoListItem5.textContent= "protectiveness: " + data[0].protectiveness;

            var infoListItem6 = document.createElement("li");
            infoListEl.append(infoListItem6);
            infoListItem6.textContent= "life expectancy: " + data[0].max_life_expectancy;

            var infoListItem7 = document.createElement("li");
            infoListEl.append(infoListItem7);
            infoListItem7.textContent= "drooling : " + data[0].drooling;

           

           




          //   infoContainer.appendChild(infoListEl);
      
          //  infoListItem.textContent = "name: " + data[0].name;
          //   infoListEl.appendChild(infoListItem);
            // infoListItem.textContent = "name: " + data[0].name;
            // infoListEl.append(infoListItem);

            // infoList.textContent = "name: " + data[0].name;
            // infoContainer.append(infoList.textContent);
            // infoList.textContent = "barking: " + data[0].barking;
            // infoContainer.append(infoList.textContent);
            // infoList.textContent = "drooling: " + data[0].drooling;
            // infoContainer.append(infoList.textContent);
            // infoList.textContent = "shedding: " + data[0].shedding;
            // infoContainer.append(infoList.textContent);
            // infoContainer.textContent = "energy: " + data[0].energy;
            // infoContainer.append(infoContainer.textContent);
            // infoContainer.textContent = "good with childrean: " + data[0].good_with_children;
            // infoContainer.append(infoContainer.textContent);
            // infoContainer.textContent = "shedding:" + data[0];

            //console.log(result.);

        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }


        
    });

    // fetch for dog info
    // var infoUrl = 'https://api.api-ninjas.com/v1/dogs?name=' + name;
    // fetch(infoUrl)
    // .then((res) => res.json())
    //   .then((data) => {
    //     console.log("data", data);
    //   }); 
    
});






// fetch(requestUrl)
// .then(function (response) {
//     return response.json();
// })
// .then(function)

//fetch call to connect to api
