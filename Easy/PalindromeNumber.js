/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * 
 * Example 1:

   Input: x = 121
   Output: true
   Explanation: 121 reads as 121 from left to right and from right to left.
*/
var isPalindrome = function (x) {
  if (x < 0) {
    console.log("Number is Less than 0 is not acceptable.");
  }
  var holder = x.toString();
  var actor = holder.split("").reverse().join("");
  return holder == actor;
};

isPalindrome(121);
