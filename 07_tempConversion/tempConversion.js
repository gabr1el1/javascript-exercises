const convertToCelsius = function(farenheit) {
  let celcius = 0;
  celcius = (farenheit - 32) * (5 / 9);
  celcius = Math.round(celcius * 10) / 10; //round to 1 decimal place
  return celcius;
};

const convertToFahrenheit = function(celsius) {
  let farenheit = 0;
  farenheit = celsius * (9 / 5) + 32;
  farenheit = Math.round(farenheit * 10) / 10; //round to 1 decimal place
  return farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
