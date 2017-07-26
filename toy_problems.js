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


//********************

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


//********************

// https://www.codewars.com/kata/band-name-generator/train/javascript
// My friend wants a new band name for her band. She like bands that use the formula: 'The' + a noun with first letter capitalized.

// dolphin -> The Dolphin

// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word like so (WITHOUT a 'The' in front):

// alaska -> Alaskalaska

// europe -> Europeurope

// Can you write a function that takes in a noun as a string, and returns her preferred band name written as a string?

function bandNameGenerator(str) {
  str = str.toLowerCase();

  let first = str.charAt(0);
  let last = str.charAt(str.length-1);
  let baseStr = str.charAt(0).toUpperCase() + str.substr(1)
  let spliced = str.split('').splice(1).join('')
  if(first === last){
    return baseStr+spliced;
  } else {
    return 'The ' + baseStr
  }

}

bandNameGenerator('Tart')//, 'Tartart')


//********************
