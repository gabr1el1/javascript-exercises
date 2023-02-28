const add = function(num1,num2) {
  return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2
};

const sum = function(array) {
	let sum = 0;
  array.forEach(function(elem){
    sum+=elem;
  });
  return sum;
};

const multiply = function(array) {
  let mult = 1;
  array.forEach(function(elem){
    mult*=elem;
  });
  return mult;
};

const power = function(num1,num2) {
	return num1**num2;
};

const factorial = function(num) {
  if(num==0){
    return 1;
  }else{
    return num * factorial(num-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
