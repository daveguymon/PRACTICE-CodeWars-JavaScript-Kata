// Even or Odd - https://www.codewars.com/kata/even-or-odd/javascript

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd"
}

//Multiply -

// The code does not execute properly. Try to figure out why.

function multiply(a, b){
  return a * b;
}

//Welcome - https://www.codewars.com/kata/577ff15ad648a14b780000e7

// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.
//
// The Task
//
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

function greet(language) {

  var languages = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso"
}

  for(var prop in languages) {
    if (languages[language]) {
      return languages[language];
    }
    else {
      return languages.english;
    }
  }
}

//Find the First Nonconsecutive Number - https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

// Your task is to find the first element of an array that is not consecutive.
//
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non consecutive number.
//
// If the whole array is consecutive then return null
//
// The array will always have at least 2 elements and all the elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

function firstNonConsecutive (arr) {
 for(var i = 0; i < arr.length; i++) {
   if(arr[i + 1] - arr[i] >= 2) {
     return arr[i + 1];
   }
 }
 return null;
}

//Unfinished Loop Bug Fixing #1 - https://www.codewars.com/kata/55c28f7304e3eaebef0000da

// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished For Loop!

function createArray(number){
  var newArray = [];

  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }

  return newArray;
}

// Your task is to create a function - basic_op().
//
// The function should take three arguments - operation(string/char), value1(number), value2(number). The function should return result of numbers after applying the chosen operation.
//
// Examples:
//
// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7

function basicOp(operation, value1, value2)
{
  if(operation === "+") {
    return value1 + value2;
  }
  else if (operation === "-") {
    return value1 - value2;
  }
  else if (operation === "*") {
    return value1 * value2;
  }
  else if (operation === "/") {
    return value1 / value2;
  }
}

//Sum of Positive - https://www.codewars.com/kata/5715eaedb436cf5606000381

// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: array may be empty, in this case return 0.

function positiveSum(arr) {
  var posNums = [];
  if (arr.length > 0) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      posNums.push(arr[i]);
    }
    else {
      posNums.push(0);
    }
  }
  var solution = posNums.reduce(function(a, b) {
    return a + b;
  })
  return solution;
  }
  return 0;
}

//Number of People On the Bus - https://www.codewars.com/kata/5648b12ce68d9daa6b000099

// There is a bus moving in the city, and it takes and drop some people in each bus stop.
//
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
//
// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
//
// Take a look on the test cases.
//
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
//
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

var number = function(busStops){
   var onTotal = [];
  var offTotal = [];

  for(var i = 0; i < busStops.length; i++ ){
      onTotal.push(busStops[i][0])
      offTotal.push(busStops[i][1]);

      var onSum = onTotal.reduce((num1, num2) => num1 + num2);
      var offSum = offTotal.reduce((num1, num2) => num1 + num2);

    }
    return onSum - offSum;
}

// Calculate BMI - https://www.codewars.com/kata/57a429e253ba3381850000fb

// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).
//
// if bmi <= 18.5 return "Underweight"
//
// if bmi <= 25.0 return "Normal"
//
// if bmi <= 30.0 return "Overweight"
//
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  var mass = weight / (height * height);

  if(mass <= 18.5){
    return "Underweight";
  }
  else if(mass <= 25.0){
    return "Normal";
  }
  else if(mass <= 30.0){
    return "Overweight";
  }
  else {
    return "Obese";
  }
}

//Sum Without Highest Or Lowest Number - https://www.codewars.com/kata/sum-without-highest-and-lowest-number/javascript

// Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)
//
// Example:
//
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
//
//
// If array is empty, null or None, or if only 1 Element exists, return 0.

function sumArray(array) {

var solution = 0;
if(!array || array.length < 2) {
  return solution;
} else {
 var sorted = array.sort(function(a, b) {
   return a - b;
 });

 var numsToAdd = sorted.slice(1, sorted.length-1);

 solution = numsToAdd.reduce((a,b) => {
   return a + b;
 }, 0);
return solution;
}
