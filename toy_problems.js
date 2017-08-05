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
