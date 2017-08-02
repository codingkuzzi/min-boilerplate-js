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
