//BUSINESS logic
Currency = function(){
}

Currency.prototype.getRates = function(passedUIFunction){
  $.get('http://api.fixer.io/latest?base=USD')
    .then(function(apiResponse){
      passedUIFunction(apiResponse.rates.EUR)
    })
}

///////////////////////////////////
//UI LOGIC

// callback function that we send to the business logic
var passedUIFunction = function(currencyData) {
  $('.results').text("A US dollar equals " + currencyData + " Euros");
}

//as simple as I can make an API call
$(document).ready(function() {
  var currencyInfo = new Currency();
  currencyInfo.getRates(passedUIFunction);
});
