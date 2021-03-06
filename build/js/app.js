(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ConvertKelvin = function(kelvin) {
  this.celsius;
  this.fahrenheit;
  this.celsiusConvert = 273.15;
  this.fahrenheitConvert = 459.67;
  this.kelvin = parseInt(kelvin);
}

ConvertKelvin.prototype.celsius = function() {
  return (this.kelvin - this.celsiusConvert).toFixed(2);
};

ConvertKelvin.prototype.fahrenheit = function() {
  return ((this.kelvin * 1.8) - this.fahrenheitConvert).toFixed(2);
};

exports.ConvertKelvin = ConvertKelvin;

},{}],2:[function(require,module,exports){

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

},{"./../js/temperature.js":1}]},{},[2]);
