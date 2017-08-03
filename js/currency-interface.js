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

  $(".api").text("API key is " + secretData.apiKey + "., username is: " + secretData.username  );

  var barChart = new BarChart();
  barChart.getCloseRate(showClosingRate);
});
