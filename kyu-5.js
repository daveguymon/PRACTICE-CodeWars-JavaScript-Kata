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
