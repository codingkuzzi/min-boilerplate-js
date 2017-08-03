var weatherApiKey = require('../.env').weatherApiKey;

function Weather() {

}



Weather.prototype.getWeather = function(passedWeatherFunction, city){

  $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + weatherApiKey)

    .then(function(apiResponse){
      console.log(apiResponse);
      passedWeatherFunction(apiResponse.main.humidity);
    });
};

module.exports = Weather;
