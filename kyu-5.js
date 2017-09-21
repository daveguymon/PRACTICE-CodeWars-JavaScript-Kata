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
