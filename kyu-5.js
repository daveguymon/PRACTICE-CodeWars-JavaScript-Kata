// Break camelCase - https://www.codewars.com/kata/break-camelcase/javascript

// Complete the solution so that the function will break up camel casing, using a space between words.
//
// Example
//
// solution('camelCasing') // => should return 'camel Casing'

function solution(string) {
  return string.split(/(?=[A-Z])/).join(' ');
}

// Two Joggers - https://www.codewars.com/kata/two-joggers/javascript

// Your job is to complete the function nbrOfLaps(x, y) that, given the length of the laps for Bob and Charles, finds the number of laps that each jogger has to complete before they meet each other again, at the same time, at the start.
//
// The function takes two arguments:
//
// The length of Bob's lap (larger than 0)
// The length of Charles' lap (larger than 0)
//
// The function should return an array (Tuple<int, int> in C#) containing exactly two numbers:
//
// The first number is the number of laps that Bob has to run
// The second number is the number of laps that Charles has to run
//
// Examples:
//
// nbrOfLaps(5, 3); // returns [3, 5]
// nbrOfLaps(4, 6); // returns [3, 2]

var nbrOfLaps = function (x, y) {
let min = Math.min(x,y),
    max = Math.max(x,y);

  function gcd(x,y) {
    min = Math.abs(min);
    max = Math.abs(max);
    console.log(min)

    while(max){
      var t = max;
      max = min % max;
      min = t;
    }
    return min;
  }

  let lcm = (!min || !max) ? 0 : Math.abs((min * max) / gcd(min, max));

  return [lcm / x, lcm / y]
}

//Palindrome Chain Length - https://www.codewars.com/kata/palindrome-chain-length/train/javascript

// Write a method palindrome_chain_length which takes a positive number and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.
//
// If the input number is already a palindrome, the number of steps is 0.
//
// Input will always be a positive integer.

let steps = 0;

var palindromeChainLength = function(n) {
  let reversed = Number(String(n).split('').reverse().join('')),
      newNum = n,
      nextNum = newNum + reversed;
  if(newNum === reversed){
    return 0;
  } else {
    palindromeChainLength(nextNum);
    steps += 1;
  }
  return steps;
};

//Convert String to Camel Case - https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
//
// Examples:
//
// // returns "theStealthWarrior"
// toCamelCase("the-stealth-warrior")
//
// // returns "TheStealthWarrior"
// toCamelCase("The_Stealth_Warrior")

function toCamelCase(str){
  if(!str) {
    return '';
  } else {
    var replaced = str.replace(/-|_/g, ' ').split(' ');
    var solution = [replaced[0]];

    for(var i = 1; i < replaced.length; i++){
       solution.push(replaced[i].substring(0,1).toUpperCase()+replaced[i].substring(1).toLowerCase());
    }
  }

  return solution.join('');
}

// Where My Anagrams At? - https://www.codewars.com/kata/where-my-anagrams-at/javascript

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
//
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
//
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
//
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {
  var sorted = word.split('').sort().join('');
  var solution =[];

  for(var i = 0; i < words.length; i++){
    if(sorted === words[i].split('').sort().join('')){
      solution.push(words[i])
    }
  }
  return solution;
}

// Moving Zeros To The End - https://www.codewars.com/kata/moving-zeros-to-the-end/javascript

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
  var nums = arr.filter(num => num !== 0);
  var zeros = arr.filter(num => num === 0);
  var solution = nums.concat(zeros);
  return solution;
}

// Largest 5 digit number in a series - https://www.codewars.com/kata/51675d17e0c1bed195000001/solutions/javascript

// Complete the solution so that it returns the largest five digit number found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

function solution(digits){
  var numsArr = digits.split('');
  var largest = 0;

  for(var i = 0; i < numsArr.length-1; i++){
    if(parseInt(numsArr.slice(i, i+5).join(''), 0) > largest) {
      largest = parseInt(numsArr.slice(i, i+5).join(''),0);
    }
  }

  return largest;
}

//Simple Pig Latin - https://www.codewars.com/kata/simple-pig-latin/javascript

// Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
//
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

function pigIt(str){
  var wordsArray = str.split(' ');
  var pigLatin = wordsArray.map(word => {
    return word.substring(1)+word.substring(0,1)+"ay";
  })
  return pigLatin.join(" ")
}
