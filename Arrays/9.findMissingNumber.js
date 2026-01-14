// Problem: Missing Number
// Topic: Array, Math, Bit Manipulation
// Description: Given an array containing n distinct numbers taken from the range [0, n], return the one number that is missing from the array.
// Sample Input:
//   [0,1,3]
// Sample Output:
//   2
//
// Functions and Complexities:
// - findTheMissingNumberInArray: Time O(n), Space O(1)

// Technique: Sum Formula
// Time: O(n), Space: O(1)
const findTheMissingNumberInArray = (inputArray) => {
  let expectedSum = 0;
  let actualSum = 0;

  for (let i = 0; i < inputArray.length; i++) {
    expectedSum += i;
    actualSum += inputArray[i];
  }

  expectedSum += inputArray.length;

  return expectedSum - actualSum;
};

const inputArray = [0, 1, 3];

const finalResult = findTheMissingNumberInArray(inputArray);

console.log("Final Result is", finalResult);
