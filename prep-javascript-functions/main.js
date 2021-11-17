function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResults = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', addTwoNumbersResults);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesResults = convertHoursToMinutes(2);
console.log('convertHoursToMinute Exercise:', convertHoursToMinutesResults);

function getGreeting(name) {
  return '"Hello ' + name + '"';
}

var getGreetingResults = getGreeting('World!');
console.log('getGreeting Exercise:', getGreetingResults);

function addAndMultiplyBy5(num1, num2) {
  return ((num1 + num2) * 5);
}

var addAndMultiplyBy5Results = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Excerise:', addAndMultiplyBy5Results);

function multiplyAndDivideBy5(num1, num2) {
  return ((num1 * num2) / 5);
}

var multiplyAndDivideBy5Results = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise:', multiplyAndDivideBy5Results);

function subractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subractTwoNumbersResults = subractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise:', subractTwoNumbersResults);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var getCircleCircumferenceResults = getCircleCircumference(5);
console.log('getCircleCircumference Exercise:', getCircleCircumferenceResults);

function getFullName(firstName, lastName) {
  return '"' + firstName + ' ' + lastName + '"';
}
var getFullNameResults = getFullName('Juan', 'Ramirez');
console.log('getFullName Exercise:', getFullNameResults);

function cube(number) {
  return Math.pow(number, 3);
}

var cubeResults = cube(5);
console.log('cube Exercise:', cubeResults);
