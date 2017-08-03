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
