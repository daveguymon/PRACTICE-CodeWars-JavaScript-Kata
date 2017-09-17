//Band Name Generator - https://www.codewars.com/kata/59727ff285281a44e3000011

// My friend wants a new band name for her band. She like bands that use the formula: 'The' + a noun with first letter capitalized.
//
// dolphin -> The Dolphin
//
// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word like so (WITHOUT a 'The' in front):
//
// alaska -> Alaskalaska
//
// europe -> Europeurope
//
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

//Descending Order - https://www.codewars.com/kata/5467e4d82edf8bbf40000155

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

//Spongebob Meme - https://www.codewars.com/kata/5982619d2671576e90000017

// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.
//
// Examples:
//
// spongeMeme("stop Making spongebob Memes!") // => 'StOp mAkInG SpOnGeBoB MeMeS!'
// spongeMeme("colored teens cant Be successful in tech") // =>'CoLoReD TeEnS CaNt bE SuCcEsSfUl iN TeCh'

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

//Product of Array of Items - https://www.codewars.com/kata/5901f361927288d961000013

// Calculate the product of all elements in an array.
//
// In JavaScript, if the array is null or is empty, the function should return null.
//
// As a challenge, try writing your method in just one line of code. It's possible to have only 36 characters within your method.

function product(values) {
  return values===null || values.length === 0 ? null : values.reduce( (product, num) => product * num);
}

//Sum of the first nth term of Series - https://www.codewars.com/kata/555eded1ad94b00403000071

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

//Mumbling - https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

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

//Sum of All Multiples of 3 or 5 - https://www.codewars.com/kata/57f36495c0bb25ecf50000e7

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

// Mutate My Strings - https://www.codewars.com/kata/mutate-my-strings/javascript

// I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.
//
// Example:
//
// stringOne = 'bubble gum';
// stringTwo = 'turtle ham';
//
// Result:
// bubble gum
// tubble gum
// turble gum
// turtle gum
// turtle hum
// turtle ham

function mutateMyStrings(stringOne, stringTwo){
  var firstString = stringOne.split('');
  var secondString = stringTwo.split('');
  var stringsArr = [stringOne];

  for(var i = 0; i <= firstString.length; i++) {
    if(firstString[i] !== secondString[i]){
      firstString[i] = secondString[i];
    }
    if(stringsArr.indexOf(firstString.join('')) === -1){
      stringsArr.push(firstString.join(''));
    }
  }
  var solution = stringsArr.map(string => {
    return string+ "\n";
  });
  return String(solution).split(',').join('');
}

mutateMyStrings('bubble gum', 'turtle ham')

// Get the Middle Character - https://www.codewars.com/kata/get-the-middle-character/train/javascript

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
//
// #Examples:
//
// Kata.getMiddle("test") should return "es"
//
// Kata.getMiddle("testing") should return "t"
//
// Kata.getMiddle("middle") should return "dd"
//
// Kata.getMiddle("A") should return "A"

function getMiddle(s){
  var length = s.length;
  if(length % 2 === 0) {
    return s.substring(length / 2 - 1, length / 2 + 1)
  } else {
    return s.substring(length / 2 - 0.5, length / 2 + 1)
  }
}
