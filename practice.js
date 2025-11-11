// File: Practice Snippets
// Description: Miscellaneous practice implementations and experiments.
// Sections:
// - maxElement: Return maximum element in array
//   Sample Input: [1, 6, 9, 22, 44, 15] -> Output: 44
//   Time O(n), Space O(1)
// - maxSumSubarray (Kadane's): Maximum subarray sum
//   Sample Input: [1, -6, 9, 22, -44, 15] -> Output depends on content; here 31
//   Time O(n), Space O(1)

// const mergetTwoSortedArray = (arr1, arr2) => {
//   const len1 = arr1.length;
//   const len2 = arr2.length;

//   let m = len1 - 1,
//     n = len2 - 1;
//   let k = len1 + len2 - 1;

//   while (n >= 0) {
//     if (arr1[m] > arr2[n]) {
//       arr1[k--] = arr1[m--];
//     } else {
//       arr1[k--] = arr2[n--];
//     }
//   }
// };

// const arr1 = [1, 4, 6];
// const arr2 = [2, 3, 5];

// const result = mergetTwoSortedArray(arr1, arr2);
// console.log("Result is ", arr1);

// const moveZerosToEnd = (inputArray) => {
//   let itrVar = 0;

//   for (let i = 0; i < inputArray.length; i++) {
//     if (inputArray[i] !== 0) {
//       inputArray[itrVar] = inputArray[i];
//       itrVar++;
//     }
//   }

//   while (itrVar < inputArray.length) {
//     inputArray[itrVar] = 0;
//     itrVar++;
//   }
// };

// const inputArray = [1, 0, 4, 0, 10];
// moveZerosToEnd(inputArray);
// console.log("Result is", inputArray);

// Kadane's algorithm / maxSumSubarray

// Time: O(n), Space: O(1)
const maxElement = (numsArray) => {
  let currElement = 0;
  let maxElement = 0;

  for (let i = 0; i < numsArray.length; i++) {
    currElement = numsArray[i];

    maxElement = Math.max(maxElement, currElement);
  }

  return maxElement;
};

const inputArray = [1, 6, 9, 22, 44, 15];

// const maxElementResult = maxElement(inputArray);

// console.log("Result is", maxElementResult);

// Time: O(n), Space: O(1)
const maxSumSubarray = (inputArray) => {
  let maxSum = -100000;

  let currSum = 0;

  for (let i = 0; i < inputArray.length; i++) {
    currSum = currSum + inputArray[i];

    maxSum = Math.max(maxSum, currSum);

    if (currSum < 0) {
      currSum = 0;
    }
  }

  return maxSum;
};

const maxInputArray = [1, -6, 9, 22, -44, 15];

const maxSumSubarrayResult = maxSumSubarray(maxInputArray);

console.log("Result is", maxSumSubarrayResult);
