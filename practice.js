// File: Practice Snippets
// Topic: Array, Dynamic Programming, Two Pointers, Greedy
// Description: Miscellaneous practice implementations and experiments.
// Sections:
// - maxElement: Return maximum element in array
//   Sample Input: [1, 6, 9, 22, 44, 15] -> Output: 44
//   Time O(n), Space O(1)
// - maxSumSubarray (Kadane's): Maximum subarray sum
//   Sample Input: [1, -6, 9, 22, -44, 15] -> Output depends on content; here 31
//   Time O(n), Space O(1)
// - removeDuplicateArrayFuncTwoPointer: Remove duplicates using two pointers
//   Sample Input: [1, 2, 2] -> Output: [1, 2]
//   Time O(n), Space O(1)
// - getMaxProfit: Best time to buy and sell stock
//   Sample Input: [7, 1, 5, 3, 6, 4] -> Output: 5
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

// Technique: Linear Scan
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

// Technique: Kadane's Algorithm
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
  return inputArray;
};

// Technique: Greedy / One Pass
// Time: O(n), Space: O(1)
const getMaxProfit = (inputArray) => {
  let maxProfit = 0,
    bestBuy = inputArray[0];

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > bestBuy) {
      maxProfit = Math.max(maxProfit, inputArray[i] - bestBuy);
    }

    bestBuy = Math.min(bestBuy, inputArray[i]);
  }

  return maxProfit;
};

const maxInputArray = [1, -6, 9, 22, -44, 15];

const maxSumSubarrayResult = maxSumSubarray(maxInputArray);

console.log("Result is", maxSumSubarrayResult);

const removeDuplicateArrayFuncTwoPointerResult =
  removeDuplicateArrayFuncTwoPointer([1, 2, 2]);

console.log("Result is", removeDuplicateArrayFuncTwoPointerResult);

const getMaxProfitInput = [7, 1, 5, 3, 6, 4];

const getMaxProfitResult = getMaxProfit(getMaxProfitInput);

console.log("Result is", getMaxProfitResult);
