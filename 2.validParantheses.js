// Problem: Valid Parentheses
// Description: Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if open brackets are closed by the same type of brackets in the correct order.
// Sample Input:
//   s = "{[]}"
// Sample Output:
//   true
//
// Functions and Complexities:
// - validParantheses: Time O(n), Space O(n) for the stack

// Time: O(n), Space: O(n)
function validParantheses(parenthesesInputString) {
  if (parenthesesInputString.length % 2 !== 0) return false;

  const stack = [];
  const map = { "}": "{", "]": "[", ")": "(" };

  for (let char of parenthesesInputString) {
    if (char in map) {
      if (stack.pop() !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

parenthesesInputString = "{}()]";
const isValidParantheses = validParantheses(parenthesesInputString);

console.log("Parantheses is ", isValidParantheses);
