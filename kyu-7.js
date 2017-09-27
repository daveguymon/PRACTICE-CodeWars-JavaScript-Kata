// You're A Square - https://www.codewars.com/kata/youre-a-square/javascript

// Given an integral number, determine if it's a square number.

var isSquare = function(n){
  return Math.sqrt(n) % 1 === 0 ? true : false;
}

// Insert Dashes - http://www.codewars.com/kata/insert-dashes/javascript

// Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

function insertDash(num) {
var solution =[]

  var arr = num.toString().split('');
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0 && arr[i +1] % 2 !== 0){
    solution.push(arr[i], '-');
    } else {
      solution.push(arr[i])
    }
  }

  return solution[solution.length-1] === '-' ? solution.slice(0, solution.length - 1).join('') : solution.join('');
}

//Categorize New Member - https://www.codewars.com/kata/categorize-new-member/train/javascript

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
//
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
//
// Input
//
// Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
//
// Note for F#: The input will be of (int list list) which is a List>
//
// Example Input
//
// [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
// Output
//
// Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
//
// Example Output
//
// ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data){
  var solution = data.map(element => {
    return element[0] >= 55 && element[1] > 7 ? 'Senior' : 'Open';
  });
  return solution;
}

// Sum Times Tables - https://www.codewars.com/kata/sum-times-tables/train/javascript

// Write a function sumTimesTables which sums the result of the sums of the elements specified in tables multiplied by all the numbers in between min and max including themselves.
//
// For example, for sumTimesTables([2,5],1,3) the result should be the same as
//
// 2*1 + 2*2 + 2*3 +
// 5*1 + 5*2 + 5*3
// i.e. the table of two from 1 to 3 plus the table of five from 1 to 3
//
// All the numbers are integers but you must take in account:
//
// tables could be empty.
// min could be negative.
// max could be really big.

function sumTimesTables(tables, min, max){
  var prodArray =[];

  var products = tables.map(element => {
    for(var i = min; i <= max; i++){
      prodArray.push(element * i);
    }
  })
  return prodArray.reduce((a,b) => a+b,0);
}

//Disemvowell Trolls - https://www.codewars.com/kata/disemvowel-trolls/javascript

// Trolls are attacking your comment section!
//
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '')
}

//Remove the Minimun - https://www.codewars.com/kata/remove-the-minimum/javascript

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
//
// Don't change the order of the elements that are left.
//
// Examples
//
// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// removeSmallest([5,3,2,1,4]) = [5,3,2,4]
// removeSmallest([2,2,1,2,1]) = [2,2,2,1]

function removeSmallest(numbers) {
  var numsArr = numbers;
  var start = numsArr[0];

  if(numsArr.length === 0) {
    return numsArr;
  } else {
    for(var i = 1; i < numsArr.length; i++) {
      if (numsArr[i] < start) {
        start = numsArr[i];
      }
    }

    var indexToRemove =  numsArr.indexOf(start);
    var solution = numsArr.filter((elem, indx, arr) => {
      return indx !== indexToRemove;
    });

    return solution;
  }
}

//Functional Addition - https://www.codewars.com/kata/538835ae443aae6e03000547

// Create a function add(n)/Add(n) which returns a function that always adds n to any number
//
// var addOne = add(1);
// addOne(3); // 4
//
// var addThree = add(3);
// addThree(3); // 6

function add(n) {
  return function(num) {
    return num + n;
  }
}

//Square Every Digit - https://www.codewars.com/kata/546e2562b03326a88e000020

// Welcome. In this kata, you are asked to square every digit of a number.
//
// For example, if we run 9119 through the function, 811181 will come out.
//
// Note: The function accepts an integer and returns an integer

function squareDigits(int) {
  var toString = String(int);

  var squared = toString.split('');

  var squaredArr = squared.map(function(val) {
    return val * val;
  })
  var joined = squaredArr.join('');
  return Number(joined);
}

//Truthy And Falsey - https://www.codewars.com/kata/595c2988d946a13298000157

// You are given two empty arrays (truthy and falsy) and you have to fill this array with at least 5 elements in each which will evaluate to true or false accordingly.

const truthy = ['dave', true, 30, 'January 20', [1,2,3]];
const falsy = [NaN, false, 0, '', undefined];

//Vowel Count - https://www.codewars.com/kata/54ff3102c1bad923760001f3

// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, and u as vowels for this Kata.

function getCount(str) {
  var vowels = ['a','e','i','o','u'];
  var count = 0;
  var strArr = str.split('');

  for(var i = 0; i < strArr.length; i++) {
    for(var j = 0; j < vowels.length; j++) {
      if(strArr[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
}

//No Ifs, No Buts - https://www.codewars.com/kata/592915cc1fad49252f000006

// Write a function that accepts two parameters (a and b) and says whether a is smaller than, bigger than, or equal to b.
//
// Here is an example code:
//
// var noIfsNoButs = function (a,b) {
//   if(a > b) return a + " is greater than " + b
//   else if(a < b) return a + " is smaller than " + b
//   else if(a == b) return a + " is equal to " + b
// }
// There's only one problem...
//
// You can't use if statements, and you can't use shorthands like (a < b)?true:false;
//
// in fact the word "if" and the character "?" are not allowed in the code.

var noIfsNoButs = function (a,b) {

switch(true) {
    case a > b:
      return a+ " is greater than " +b;
    case a < b:
      return a+ " is smaller than " +b;
    case a === b:
      return a+ " is equal to " +b;
  }
}

//Printer Errors - https://www.codewars.com/kata/56541980fa08ab47a0000040

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
//
// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
//
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.
//
// You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
//
// The string has a length greater or equal to one and contains only letters from ato z.
//
// #Examples:
//
// s="aaabbbbhaijjjm"
// error_printer(s) => "0/14"
//
// s="aaaxbbbbyyhwawiwjjjwwm"
// error_printer(s) => "8/22"

function printerError(s){
  var numerator = 0;
  var denominator = s.length;

  var arr = s.split('');


  for(var i = 0; i < arr.length; i++) {
    switch(arr[i]){
      case 'n':
        numerator++;
        break;
      case 'o':
        numerator++;
        break;
      case 'p':
        numerator++;
        break;
      case 'q':
        numerator++;
        break;
      case 'r':
        numerator++;
        break;
      case 's':
        numerator++;
        break;
      case 't':
        numerator++;
        break;
      case 'u':
        numerator++;
        break;
      case 'v':
        numerator++;
        break;
      case 'w':
        numerator++;
        break;
      case 'x':
        numerator++;
        break;
      case 'y':
        numerator++;
        break;
      case 'z':
        numerator++;
        break;
    }

  }
  return numerator + "/" + denominator;
}

//Find Divisors Number - https://www.codewars.com/kata/542c0f198e077084c0000c2e

// Find the number of divisors of a positive integer n.
//
// Example:
//
// divisors 4  = 3 -- 1, 2, 4
// divisors 5  = 2 -- 1, 5
// divisors 12 = 6 -- 1, 2, 3, 4, 6, 12
// divisors 30 = 8 -- 1, 2, 3, 5, 6, 10, 15, 30

function getDivisorsCnt(n){

    var numsArr = [];
    for (var i = 0; i <= n; i++) {
    numsArr.push(i);
    }
   return numsArr.filter(function(num) {
      return n % num === 0;
    }).length

}

//Highest and Lowest - https://www.codewars.com/kata/highest-and-lowest/javascript

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//Convert string of numbers to array by splitting at spaces (' ')
//Sort numbers from highest to lowest
//Check to see if only one value
//If one value, return single value as solution, else
//Extract highest number (index 0) to new array
//Extract lowest number (last index) to same array
//Join array with space between values
//Return solution as a string



function highAndLow(numbers){
  var split = numbers.split(' ').sort((a,b) => b-a);
  var highestAndLowest = [];

  highestAndLowest.push(split[0]);
  highestAndLowest.push(split[split.length-1]);

  return highestAndLowest.toString().replace(',', ' ');
}

highAndLow('2 50 -8 0 33 -17') //"50 -17"


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
