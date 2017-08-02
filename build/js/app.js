(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
///////////////////////////////////
//UI LOGIC

// callback function that we send to the business logic
var passedUIFunction = function(currencyData) {
  $('.results').text("A US dollar equals " + currencyData + " Euros");
};

module.exports = passedUIFunction;

},{}],3:[function(require,module,exports){
var Currency = require('./../js/currency.js');
var passedUIFunction = require('./../js/passedFunc-interface.js');

///////////////////////////////////
//UI LOGIC

//as simple as I can make an API call
$(document).ready(function() {
  var currencyInfo = new Currency();
  currencyInfo.getRates(passedUIFunction);
});

///////////////////////////////////
//UI LOGIC

// callback function that we send to the business logic
var passedUIFunction = function(currencyData) {
  $('.results').text("A US dollar equals " + currencyData + " Euros");
};

module.exports = passedUIFunction;

},{"./../js/currency.js":1,"./../js/passedFunc-interface.js":2}]},{},[3]);
