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
