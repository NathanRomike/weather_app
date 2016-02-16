
var ConvertKelvin = require('./../js/temperature.js').ConvertKelvin;
var apiKey = "1ce02eae37f17adf7e9f5b11ebd200ff";

$(document).ready(function(){
  $('#weatherTempC').click(function(){
    var city = $('#location').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      if (response.cod !== 200) {
        $('.showWeather').text(response.message);
      } else {
        kelToCel = new ConvertKelvin(response.main.temp)
        $('.showWeather').text("The temperature in " + city + " is " + kelToCel.celsius() + " C");
      }
    });
  });

  $('#weatherTempF').click(function(){
    var city = $('#location').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      if (response.cod !== 200) {
        $('.showWeather').text(response.message);
      } else {
        kelToCel = new ConvertKelvin(response.main.temp)
        $('.showWeather').text("The temperature in " + city + " is " + kelToCel.fahrenheit() + " F");
      }
    });
  });
});

$(document).ready(function() {
  $('#time').text(moment());
});

var apiKey = "1ce02eae37f17adf7e9f5b11ebd200ff";

$(document).ready(function(){
  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      if (response.cod !== 200) {
        $('.showWeather').text(response.message);
      } else {
        $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
      }
    });
  });
});
