var ConvertKelvin = function(kelvin) {
  this.celsius;
  this.fahrenheit;
  this.celsiusConvert = 273.15;
  this.fahrenheitConvert = 459.67;
  this.kelvin = parseInt(kelvin);
}

ConvertKelvin.prototype.celsius = function() {
  return this.kelvin - this.celsiusConvert;
};

ConvertKelvin.prototype.fahrenheit = function() {
  return (this.kelvin * 1.8) - this.fahrenheitConvert;
};

exports.ConvertKelvin = ConvertKelvin;
