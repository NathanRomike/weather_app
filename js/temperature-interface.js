var ConvertKelvin = require('./../js/temperature.js').ConvertKelvin;
var apiKey = "1ce02eae37f17adf7e9f5b11ebd200ff";

$(document).ready(function(){
  $('#weatherTempC').click(function(){
    var city = $('#location').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      if (response.cod !== 200) {
        $('.showWeather').text(response.message);
      } else {
        kelvinInput = new ConvertKelvin(response.main.temp)
        $('.showWeather').text("The temperature in " + city + " is " + kelvinInput.celsius() + " C");
      }
    });
  });

  $('#weatherTempF').click(function(){
    var city = $('#location').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      if (response.cod !== 200) {
        $('.showWeather').text(response.message);
      } else {
        kelvinInput = new ConvertKelvin(response.main.temp)
        $('.showWeather').text("The temperature in " + city + " is " + kelvinInput.fahrenheit() + " F");
      }
    });
  });
});
