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
