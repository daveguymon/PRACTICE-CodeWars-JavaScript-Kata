// In this kata, you must create a digital root function.
//
// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

function digitalRoot(num) {

  while(num > 9) {
    num = num.toString().split('').reduce((a,b) => +a + +b);
  }
  return num;
}

digitalRoot(163)


// There is an array of non-negative integers. A second array is formed by
// shuffling the elements of the first array and deleting a random element.
// Given these two arrays, find which element is missing in the second array.

let arrOne = ['Bob Ross', 'Tim Allen', 'Richard Simmons'];
let arrTwo = ['Bob Ross', 'Richard Simmons', 'Tim Allen', 'big bird'];

function missingPerson(arrOne, arrTwo) {
  for(let item of arrOne) {
    if(arrTwo.indexOf(item) === -1) {
      return item;
    }
  }
  for(let item of arrTwo) {
    if(arrOne.indexOf(item) === -1) {
      return item;
    }
  }
  return "There are no missing elements."
}

missingPerson(arrOne, arrTwo);
