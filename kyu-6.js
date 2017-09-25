// Take A Ten Minute Walk - http://www.codewars.com/kata/take-a-ten-minute-walk/javascript

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
//
// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
  var count = {};
  var e = [];
  var w = [];
  var n = [];
  var s = [];

  if(walk.length !== 10) {
    return false;
  } else {
    n = walk.filter(dir => dir === 'n');
    s = walk.filter(dir => dir === 's');
    e = walk.filter(dir => dir === 'e');
    w = walk.filter(dir => dir === 'w');
  }

  return n.length === s.length && e.length === w.length ? true : false;
}

//Dubstep - https://www.codewars.com/kata/dubstep/javascript

// Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.
//
// Let's assume that a song consists of some number of words. To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.
//
// For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".
//
// Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.
//
// Input
//
// The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters
//
// Output
//
// Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.
//
// Examples
//
// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
//   // =>  WE ARE THE CHAMPIONS MY FRIEND

function songDecoder(song){
  var noWub = song.replace(/WUB/g, ' ');
  var trimmed = noWub.replace(/^\s+|\s+$/g, "");
  return trimmed.replace(/ {1,}/g," ");
}

// Find the Parity Outlier - https://www.codewars.com/kata/find-the-parity-outlier/javascript

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns N.
//
// For example:
//
// [2, 4, 0, 100, 4, 11, 2602, 36]
//
// Should return: 11
//
// [160, 3, 1719, 19, 11, 13, -21]
//
// Should return: 160

function findOutlier(integers){
  var evens = [];
  var odds = [];

  var categories = integers.map(number => {
    return number % 2 === 0 ? evens.push(number) : odds.push(number);
  })

  return evens.length === 1 ? evens[0] : odds[0]

}

// Who Likes It? - http://www.codewars.com/kata/who-likes-it/javascript

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
//
// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:
//
// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
// For more than 4 names, the number in and 2 others simply increases.

function likes(names) {
  var length = names.length;
  if(length === 0) {
    return "no one likes this";
  } else if (length === 1) {
    return names[0] + " likes this";
  } else if (length === 2) {
    return names[0] + " and " + names[1] + " like this";
  } else if (length === 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else {
    return names[0] + ", " + names[1] + " and " + `${length - 2} others like this`;
  }
}

// Does my number look big in this? - https://www.codewars.com/kata/does-my-number-look-big-in-this/javascript

// A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.
//
// For example, take 153 (3 digits):
//
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1634 (4 digits):
//
//     1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
// The Challenge:
//
// Your code must return true or false depending upon whether the given number is a Narcissistic number.
//
// Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.

function narcissistic( value ) {
  var numArray = value.toString().split('');
  var exponent = numArray.length;
  var newNums = numArray.map(number => {
    return Math.pow(number, exponent)
  })
  var sum = newNums.reduce((a,b) => {
    return a + b;
  }, 0);

  return sum === value ? true : false;
}

//Is A Number Prime? - https://www.codewars.com/kata/5262119038c0985a5b00029f/solutions/javascript

// Define a function isPrime/is_prime() that takes one integer argument and returns true/True or false/False depending on if the integer is a prime.
//
// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
//
// Example
//
// isPrime(5)
// => true
// Assumptions
//
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).

function isPrime(num) {
  if(num < 2) {
    return false;
  } else {
    for(var i = 2; i < num; i++){
      if(num % i === 0){
        return false;
      }
    }
      return true;
  }
}

// Stop gninnipS My sdroW! - https://www.codewars.com/kata/stop-gninnips-my-sdrow/javascript

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//
//
// Examples:
//
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(str){
  var solution = str.split(' ').map(word => {
    return word.length >= 5 ? word.split('').reverse().join('') : word;
  }).join(' ');

  return solution;
}

//Array.diff - https://www.codewars.com/kata/523f5d21c841566fde000009

// Your goal in this kata is to implement an difference function, which subtracts one list from another.
//
// It should remove all values from list a, which are present in list b.
//
// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
//
// array_diff([1,2,2,2,3],[2]) == [1,3]

function array_diff(a, b) {
 for(var i = 0; i < a.length; i++) {
   for(var j = 0; j < b.length; j++) {
     if(a[i] === b[j]) {
       a.splice(i, 1);
       i--;
     }
   }

 }

 return a;

}

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
