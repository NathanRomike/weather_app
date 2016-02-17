
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

function displayTime() {
  var time = moment().format('MMMM Do YYYY, h:mm:ss a');
  $('#time').html(time);
  setTimeout(displayTime, 1000);
}
$(document).ready(function() {
  displayTime();
  $('#buttonSetTimer').click(function(){
    $('.timer-info').text("This doesn't work!");
  });
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
