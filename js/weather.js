var weatherApiKey = require('../.env').weatherApiKey;

function Weather() {

}



Weather.prototype.getWeather = function(passedWeatherFunction){

  $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=' + weatherApiKey)

    .then(function(apiResponse){
      console.log(apiResponse);
      passedWeatherFunction(apiResponse.coord.lon, apiResponse.coord.lat,apiResponse.main.temp );
    });
};

module.exports = Weather;
