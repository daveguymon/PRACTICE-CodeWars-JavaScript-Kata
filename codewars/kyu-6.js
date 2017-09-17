//Sum of Digits/Digital Root - https://www.codewars.com/kata/541c8630095125aba6000c00

// In this kata, you must create a digital root function.
//
// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

function digital_root(n) {
  while(n > 9) {
    n = n.toString().split('').reduce((a,b) => +a + +b);
  }
  return n;
}

//Create a Phone Number - https://www.codewars.com/kata/525f50e3b73515a6db000b83

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


//Multiples of 3 and 5 - https://www.codewars.com/kata/514b92a657cdc65150000006

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


//Longest Palindrome - https://www.codewars.com/kata/54bb6f887e5a80180900046b

// Find the length of the longest substring in the given string s that is the same in reverse.
//
// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.
//
// If the length of the input string is 0, return value must be 0.
//
// Example:
//
// "a" -> 1
// "aab" -> 2
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

longestPalindrome=function(s){

  var solution = 0;

  for(var i = 0; i <= s.length; i++){
    for(var j = 1; j <= s.length; j++){
      if(s.substring(i, j) == s.substring(i,j).split('').reverse().join('')) {
        if(s.substring(i,j).length > solution) {
          solution = s.substring(i,j).length;
        }
      } else {
        null;
      }
    }
  }
  return solution;
}
