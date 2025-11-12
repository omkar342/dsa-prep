// Problem: Remove Duplicates from Sorted Array
// Topic: Array, Two Pointers
// Description: Given a sorted array, remove the duplicates in-place such that each unique element appears only once and return the new length.
// Sample Input:
//   [1,1,2]
// Sample Output:
//   new length = 2, array becomes [1,2,_]
//
// Functions and Complexities:
// - removeDuplicateArrayFunc: Time O(n), Space O(n)
// - removeDuplicateArrayFuncTwoPointer: Time O(n), Space O(1)

// Technique: Hash Map
// Time: O(n), Space: O(n)
const removeDuplicateArrayFunc = (inputArray) => {
  let resultMap = {};
  let uniqueCount = 0;

  for (let num of inputArray) {
    if (!resultMap.hasOwnProperty(num)) {
      resultMap[num] = 1;
      uniqueCount++;
    }
  }

  return uniqueCount;
};

// Technique: Two Pointers
// Time: O(n), Space: O(1)
const removeDuplicateArrayFuncTwoPointer = (inputArray) => {
  let i = 0;

  for (let j = 0; j < inputArray.length; j++) {
    if (inputArray[i] !== inputArray[j]) {
      i++;
      inputArray[i] = inputArray[j];
    }
  }

  return i + 1;
};

const inputArray = [1, 1, 2];

const finalResult = removeDuplicateArrayFunc(inputArray); // This is normal brute force approach with S.C. = O(n) & T.C. = O(n).

const finalResultTwoPointer = removeDuplicateArrayFuncTwoPointer(inputArray); // Two pointer approach with S.C. = O(1) & T.C. = O(n).

console.log("Final result is", finalResult);

console.log("Two Pointer Final result is", finalResultTwoPointer);

console.log(inputArray);
