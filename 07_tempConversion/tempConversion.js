const convertToCelsius = function(fahrenheit) {
  let cel = Number((fahrenheit - 32) * (5/9).toFixed(1));
  return cel
};

const convertToFahrenheit = function(celcius) {
  let far = Number((celcius * (9/5) + 32).toFixed(1));
  return far
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
