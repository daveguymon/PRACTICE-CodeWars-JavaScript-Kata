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
