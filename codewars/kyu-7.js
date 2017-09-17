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
