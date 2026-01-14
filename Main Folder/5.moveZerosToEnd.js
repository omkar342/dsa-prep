// Problem: Move Zeroes
// Topic: Array, Two Pointers
// Description: Given an integer array, move all 0's to the end while maintaining the relative order of the non-zero elements.
// Sample Input:
//   [0,1,0,3,12]
// Sample Output:
//   [1,3,12,0,0]
//
// Functions and Complexities:
// - moveZerosToEnd: Time O(n), Space O(n) in this implementation (extra array)
// - moveZerosToEndTwoPointer: Time O(n), Space O(1) using two pointers

// Technique: Brute Force (extra array)
// Time: O(n), Space: O(n)
function moveZerosToEnd(inputArray) {
  const outputArray = [];
  const inputArrayLenght = inputArray.length;
  let itrIndex = 0;

  for (let i in inputArray) {
    if (inputArray[i] !== 0) {
      outputArray.push(inputArray[i]);
      itrIndex++;
    }
  }

  console.log("itrIndex", itrIndex);

  while (itrIndex < inputArrayLenght) {
    outputArray.push(0);
    itrIndex++;
  }

  return outputArray;
}

// Technique: Two Pointers
// Time: O(n), Space: O(1)
function moveZerosToEndTwoPointer(inputArray) {
  let i = 0,
    j = 0;

  while (j < inputArray.length) {
    if (inputArray[j] !== 0) {
      inputArray[i] = inputArray[j];
      i++;
    }
    j++;
  }

  while (i < inputArray.length) {
    inputArray[i] = 0;
    i++;
  }

  return inputArray;
}

const inputArray = [0, 1, 0, 3, 12];
const outputArray = moveZerosToEndTwoPointer(inputArray);
console.log("Output array", outputArray);
