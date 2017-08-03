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
