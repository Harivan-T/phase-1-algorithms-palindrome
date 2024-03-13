function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}


/* 
  function isPalindrome(word):
    return word is equal to reverse(word)

*/

/*
  Add written explanation of your solution here
   uses the split('') method to convert the word into an array of characters,
    reverse() to reverse the array, and join('') to convert the array back to a string. 
   It then compares this reversed string with the original word to determine if it's a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
