(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "4e7b6b7a2a3fea22aa1726375e98828c";
exports.nasaApiKey = "amBGZNec2slSJnOX1oSRanpcuUODiLyYT2tgEONi";
exports.weatherApiKey = "caa2a9da0c530ba7809ddb248b3c6dcf";
exports.username = "Anna";

},{}],2:[function(require,module,exports){
//BUSINESS logic
var secretData = require('./../.env');

function BarChart(){
}

BarChart.prototype.getCloseRate = function(showClosingRate){
  $.getJSON('https://marketdata.websol.barchart.com/getQuote.json?apikey=' + secretData.apiKey + '&symbols=AAPL')
    .then(function(apiResponse){
      console.log(apiResponse);
      showClosingRate(apiResponse.results[0]);
    });
};

module.exports = BarChart;

},{"./../.env":1}],3:[function(require,module,exports){
//BUSINESS logic
function Currency(){
}

Currency.prototype.getRates = function(passedUIFunction){
  $.get('http://api.fixer.io/latest?base=USD')
    .then(function(apiResponse){
      passedUIFunction(apiResponse.rates.EUR);
    });
};

module.exports = Currency;

},{}],4:[function(require,module,exports){
var nasaKey = require('./../.env').nasaApiKey;

function Nasa(){
}

Nasa.prototype.getImage = function(passedNasaFunction){

  $.getJSON('https://api.nasa.gov/planetary/apod?api_key=' + nasaKey)
    .then(function(apiResponse){
      console.log(apiResponse);
      passedNasaFunction(apiResponse.explanation, apiResponse.hdurl);
      //passedNasaFunction(apiResponse.hdurl);
    });
};

module.exports = Nasa;

},{"./../.env":1}],5:[function(require,module,exports){
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

},{"../.env":1}],6:[function(require,module,exports){
//Include our Back end logic
var Currency = require('./../js/currency.js');
var secretData = require('./../.env');
var BarChart= require('../js/barchart.js');


///////////////////////////////////
//UI LOGIC

// callback function that we send to the business logic
var passedUIFunction = function(currencyData) {
  $('.results').text("A US dollar equals " + currencyData + " Euros");
};


// callback function that we send to the business logic
var showClosingRate = function(stockData) {
  console.log(stockData);
  $('.stock').text("The closing rate for " + stockData.name + " is " + stockData.close + " Dollars");
};

//as simple as I can make an API call
$(document).ready(function() {
  var currencyInfo = new Currency();
  currencyInfo.getRates(passedUIFunction);

  $(".api").text("API key is " + secretData.apiKey+ "., username is: " + secretData.username );

  var barChart = new BarChart();
  barChart.getCloseRate(showClosingRate);
});

// var nasaKey = require('./../.env').nasaApiKey;
var Nasa = require('../js/nasa.js');


var passedNasaFunction = function(nasaData1, nasaData2) {
  $('.nasa-explanation').text("This is a test " + nasaData1);
  $('.nasa-image').append('<img id="nasa-img" src="' + nasaData2 + '">');
};

$(document).ready(function() {
  event.preventDefault();
  console.log("we got here");
  var nasaInfo = new Nasa();
  nasaInfo.getImage(passedNasaFunction);

});

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

});

},{"../js/barchart.js":2,"../js/nasa.js":4,"../js/weather.js":5,"./../.env":1,"./../js/currency.js":3}]},{},[6]);
