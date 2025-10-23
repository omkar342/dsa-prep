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
