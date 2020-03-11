$(document).ready(function(){ 

var APIKey = "166a433c57516f51dfab1f7edaed8413";

var cityInput = document.querySelector(".search");
var previous = document.querySelector("#lastResults");

var cities = [];


appTown();

init();

function renderCities(){
     lastResults.innerHTML = "";

    for(var i = 0; i < cities.length; i++){
        var city = cities[i];

        var li = document.createElement("li");
        li.textContent=city;
        li.setAttribute("data-index", i);

        lastResults.appendChild(li);

    }
}

function init() {

    var storedCities = JSON.parse(localStorage.getItem("cities"));

    if(storedCities !== null){
        cities = storedCities;
    }
    renderCities();
}

function storeCities(){
    localStorage.setItem("cities", JSON.stringify(cities))
}
  


function appTown(){
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Berkeley,US&units=imperial&appid=" + APIKey;
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=Berkeley,US&units=imperial&appid=" + APIKey;
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(queryURL);
        console.log(response);
        $(".cityName").text("Current Weather for " + response.name);
        $(".icon").append($('<img>',{id:"icon", src:"http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png" }));
        $(".temp").text("Temperature (F) " + response.main.temp);
        $(".humid").text("Humidity: " + response.main.humidity + " %");
        $(".wind").text("Wind Speed: " + response.wind.speed + " mph");

    });

     
     $.ajax({
         url: forecastURL,
         method: "GET"
        }).then(function(response){


        //    src='"http://openweathermap.org/img/w" +  + ".png"'
        //    response.list[2].weather[0].icon 
           
        console.log(forecastURL);
        console.log(response);
        $(".day1date").html(moment().add(1, "day").format("MMM Do YYYY"));
        $("#day1Icon").append($('<img>',{ id:"icon1", src:"http://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + "@2x.png" }));
        $(".day1Temp").text("Temperature (F)  " + response.list[1].temp.day);
        $(".day1Hum").text("Humidity " + response.list[1].humidity + " %");

        $(".day2date").html(moment().add(2, "day").format("MMM Do YYYY"));
        $(".day2Icon").append($('<img>',{ id:"icon2", src:"http://openweathermap.org/img/wn/" + response.list[2].weather[0].icon + "@2x.png" }));
        $(".day2Temp").text("Temperature (F)  " + response.list[2].temp.day);
        $(".day2Hum").text("Humidity " + response.list[2].humidity + " %");

        $(".day3date").html(moment().add(3, "day").format("MMM Do YYYY"));
        $(".day3Icon").append($('<img>',{ id:"icon3", src:"http://openweathermap.org/img/wn/" + response.list[3].weather[0].icon + "@2x.png" }));
        $(".day3Temp").text("Temperature (F)  " + response.list[3].temp.day);
        $(".day3Hum").text("Humidity " + response.list[3].humidity + " %");

        $(".day4date").html(moment().add(4, "day").format("MMM Do YYYY"));
        $(".day4Icon").append($('<img>',{ id:"icon4", src:"http://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + "@2x.png" }));
        $(".day4Temp").text("Temperature (F)  " + response.list[4].temp.day);
        $(".day4Hum").text("Humidity " + response.list[4].humidity + " %");

        $(".day5date").html(moment().add(5, "day").format("MMM Do YYYY"));
        $(".day5Icon").append($('<img>',{ id:"icon5", src:"http://openweathermap.org/img/wn/" + response.list[5].weather[0].icon + "@2x.png" }));
        $(".day5Temp").text("Temperature (F)  " + response.list[5].temp.day);
        $(".day5Hum").text("Humidity " + response.list[5].humidity + " %");
    });
 
}


$("#searchBtn").on("click", function(event){
    event.preventDefault();
    var city = $(".search").val();
    // updateStorage();
    // previous();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",US&units=imperial&appid=" + APIKey;
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",US&units=imperial&appid=" + APIKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(queryURL);
        console.log(response);
        $(".cityName").text("Current Weather for " + response.name);
        // $(".icon").remove();
        $("#icon").remove();
        $(".icon").append($('<img>',{id:"icon", src:"http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png" }));
        $(".temp").text("Temperture (F) " + response.main.temp);
        $(".humid").text("Humidity: " + response.main.humidity + " %");
        $(".wind").text("Wind Speed: " + response.wind.speed + " mph");
    });

});

$("#searchBtn").on("click", function(event){
    event.preventDefault();
    var city = $(".search").val();
    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",US&units=imperial&appid=" + APIKey;
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + ",US&units=imperial&appid=" + APIKey;

    
    
    $.ajax({
        url: forecastURL,
        method: "GET"
    }).then(function(response){
        console.log(forecastURL);
        console.log(response);
        
        $(".day1date").html(moment().add(1, "day").format("MMM Do YYYY"));
        $("#icon1").remove();
        $("#day1Icon").append($('<img>',{ id:"icon1", src:"http://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + "@2x.png" }));
        $(".day1Temp").text("Temperature (F)  " + response.list[1].temp.day);
        $(".day1Hum").text("Humidity " + response.list[1].humidity + " %");
        
        $(".day2date").html(moment().add(2, "day").format("MMM Do YYYY"));
        $("#icon2").remove();
        $(".day2Icon").append($('<img>',{ id:"icon2", src:"http://openweathermap.org/img/wn/" + response.list[2].weather[0].icon + "@2x.png" }));
        $(".day2Temp").text("Temperature (F)  " + response.list[2].temp.day);
        $(".day2Hum").text("Humidity " + response.list[2].humidity + " %");
        
        $(".day3date").html(moment().add(3, "day").format("MMM Do YYYY"));
        $("#icon3").remove();
        $(".day3Icon").append($('<img>',{ id:"icon3", src:"http://openweathermap.org/img/wn/" + response.list[3].weather[0].icon + "@2x.png" }));
        $(".day3Temp").text("Temperature (F)  " + response.list[3].temp.day);
        $(".day3Hum").text("Humidity " + response.list[3].humidity + " %");
        
        $(".day4date").html(moment().add(4, "day").format("MMM Do YYYY"));
        $("#icon4").remove();
        $(".day4Icon").append($('<img>',{ id:"icon4", src:"http://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + "@2x.png" }));
        $(".day4Temp").text("Temperature (F)  " + response.list[4].temp.day);
        $(".day4Hum").text("Humidity " + response.list[4].humidity + " %");

        $(".day5date").html(moment().add(5, "day").format("MMM Do YYYY"));
        $("#icon5").remove();
        $(".day5Icon").append($('<img>',{ id:"icon5", src:"http://openweathermap.org/img/wn/" + response.list[5].weather[0].icon + "@2x.png" }));
        $(".day5Temp").text("Temperature (F)  " + response.list[5].temp.day);
        $(".day5Hum").text("Humidity " + response.list[5].humidity + " %");
        
        
   
    });
});

 
$("#searchBtn").on("click", function(event){
    event.preventDefault();
    
    var cityText = cityInput.value.trim();

    if(cityText === ""){
        return;
    }
    cities.push(cityText);
    cityInput.value = "";

    storeCities();
    renderCities();
});










});
