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
