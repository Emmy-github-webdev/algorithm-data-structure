/**
 * 
 * @param {Challenge: is a string a palindrome?
Report a problem
Recursive case
Finally, write the recursive case.

Use the provided function middleCharacters to remove the first and last characters from the string.

Check that the console output from the checkPalindrome function is correct.

Once implemented, uncomment the Program.assertEqual() for isPalindrome("rotor") at the bottom to verify that the test assertion passes.} str 
 * @returns 
 */

// Returns the first character of the string str
var firstCharacter = function(str) {
  return str.slice(0, 1);
};

// Returns the last character of a string str
var lastCharacter = function(str) {
  return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
var middleCharacters = function(str) {
  return str.slice(1, -1);
};

var isPalindrome = function(str) {
  // base case #1
  if(str.length <= 1){
      return true;
      // base case #2
  } else if (firstCharacter(str) !== lastCharacter(str)){
      return false;
  }else {
       // recursive case
      return true;
  }
};

var checkPalindrome = function(str) {
  println("Is this word a palindrome? " + str);
  println(isPalindrome(str));
};

checkPalindrome("a");
Program.assertEqual(isPalindrome("a"), true);
checkPalindrome("motor");
Program.assertEqual(isPalindrome("motor"), false);
checkPalindrome("rotor");
Program.assertEqual(isPalindrome("rotor"), true);

