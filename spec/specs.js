describe('ConvertKelvin', function() {
  it("Returns the temp in fahrenheit", function() {
    var test = new ConvertKelvin("0");
    expect(test.fahrenheit()).to.eq("-459.67")
  });

  it("Returns the temp in celsius", function() {
    var test = new ConvertKelvin("0");
    expect(test.celsius()).to.eq("-273.15")
  });
});
