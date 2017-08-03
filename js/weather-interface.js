var Weather = require('../js/weather.js');

var passedWeatherFunction = function(weatherData1, weatherData2, weatherData3) {
  $('.longitude').text("Longitude: " + weatherData1);
  $('.latitude').text("Latitude: " + weatherData2);
  $('.weather').text("Temperature: " + weatherData3);
};

$(document).ready(function() {
  event.preventDefault();
  console.log("we got here");
  var weather = new Weather();
  weather.getWeather(passedWeatherFunction);
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
  });

});
