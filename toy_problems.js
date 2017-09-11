// Your task is to write function findSum.
//
// Upto and including n, this function will return the sum of all multiples of 3 and 5.
//
// For example:
//
// findSum(5) should return 8 (3 + 5)
//
// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
  let nums = [];

  for(var i = 3; i <= n; i++){
    i % 3 === 0 || i % 5 === 0 ? nums.push(i) : null;
  }

  let solution = nums.reduce((curr, next) => {
    return curr += next
  }, 0)

  return solution;
}

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
  var numsArr = [];

  for(var i = 3; i < number; i++){
    numsArr.push(i)
  }

  var threesFives = numsArr.filter(val => {
    return val % 3 === 0 || val % 5 === 0;
  })

  var solution = threesFives.reduce((curr, next) => {
    return curr += next
  }, 0)

  return solution;
}

solution(10) //23

// This time no story, no theory. The examples below show you how to write function accum:
//
// Examples:
//
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  return s.split('').map(function(letter, index){
	  return letter.repeat(index + 1).toLowerCase();
	}).map(function(letters){
	  return letters.substring(0,1).toUpperCase() + letters.substring(1).toLowerCase()
	}).join('-')

}

accum("abcd");    // "A-Bb-Ccc-Dddd"

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//
// Example:
//
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parenthesis!

function createPhoneNumber(numbers){
  var firstSet = parseInt(numbers.slice(0,1) + numbers.slice(1,2) + numbers.slice(2,3));
  var secSet = parseInt(numbers.slice(3,4) + numbers.slice(4,5) + numbers.slice(5,6));
  var thirdSet = parseInt(numbers.slice(6,7) + numbers.slice(7,8) + numbers.slice(8,9) + numbers.slice(9,10));

  var phoneNumber = "("+firstSet+")" + " " + secSet + "-" + thirdSet;
  return phoneNumber;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

// Task:
//
// Your task is to write a function which returns the sum of following series upto nth term(parameter).
//
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
//
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.
// Examples:
//
// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"

function SeriesSum(n){
  let fractionsArr = [];
  let instances = 1;
  let denom = 1;

  while(instances <= n){
    fractionsArr.push(denom);
    denom+=3;
    instances++;
  }

  let decimals = fractionsArr.map(value => {
    return 1/value
  })

  let sum = decimals.reduce(function(sum, value) {
    return sum + value;
  }, 0)

  return sum.toFixed(2);
}



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

//This is a tough one!  The most common find operation is to an object that has a given property.  Rather than writing out a full function every time, it would be great if we has a shorthand syntax to find an object like this:
//findWhere(ladders, { height: '20 feet' });
//The object { ladders: '20 feet' } should be used as the search criteria - we would want to find a ladder whose 'height' property was '20 feet';
//
//
//Your goal: Write a 'findWhere' function that achieves this shorthand approach.  'findWhere' should return the found object.
//
//In summary:
//
//var ladders = [
//  { id: 1, height: 20 },
//  { id: 3, height: 25 }
//];
//
//findWhere(ladders, { height: 25 }); // result: { id:3, height: 25 }
//
//Hint: the hard part of this is figuring out the name of the proeprty on the criteria.  You can use Object.keys(criteria)[0] to figure out the name of the property on the object.  For example, Object.keys({ height: '20 feet' }) would return 'height'.  You could then check to see if a given element in the array had a property equal to the criteria's value with something like element[property] === criteria[property].

function findWhere(array, criteria) {
  return array.find( function(obj) {
      var property = Object.keys(criteria)[0];
      return obj[property] === criteria[property];
  } );
}

//********************

//Reducing Properties
//
//Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
//Hint: Don't forget to return the accumulator object (the first argument to the iterator function)

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(prev, desk) {
    if(desk.type === 'sitting'){
        ++prev.sitting;
    }
    if(desk.type==='standing'){
        ++prev.standing;
    }
    return prev;
}, { sitting: 0, standing: 0 });


//********************

// Your task is to make a function that can take any non-negative integer as a argument and return it with it's digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//
// Examples:
//
// Input: 21445 Output: 54421
//
// Input: 145263 Output: 654321
//
// Input: 1254859723 Output: 9875543221

function descendingOrder(n){
  return n.toString().split('').sort((a,b) => b-a).join('') * 1;
}

//********************

// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

function spongeMeme(sentence) {
  const solution = sentence.toLowerCase().split('').map( (letter, index) => {
    if(index % 2 === 0) {
      return letter.toUpperCase();
    } else {
      return letter;
    }
  }).join('');

  return solution;
}

spongeMeme("stop Making spongebob Memes!")


//********************
// Calculate the product of all elements in an array.
//
// In JavaScript, if the array is null or is empty, the function should return null.
//
// As a challenge, try writing your method in just one line of code. It's possible to have only 36 characters within your method.

function product(values) {
  return values===null || values.length === 0 ? null : values.reduce( (product, num) => product * num);
}

product([1,2,3]) //540
