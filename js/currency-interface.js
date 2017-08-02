var Currency = require('./../js/currency.js');
var passedUIFunction = require('./../js/passedFunc-interface.js');

///////////////////////////////////
//UI LOGIC

//as simple as I can make an API call
$(document).ready(function() {
  var currencyInfo = new Currency();
  currencyInfo.getRates(passedUIFunction);
});
