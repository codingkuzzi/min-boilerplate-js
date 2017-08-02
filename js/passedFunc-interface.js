///////////////////////////////////
//UI LOGIC

// callback function that we send to the business logic
var passedUIFunction = function(currencyData) {
  $('.results').text("A US dollar equals " + currencyData + " Euros");
};


module.exports = passedUIFunction;
