// Problem: Maximum Sum of Subarrays of Size K (and Distinct Variant)
// Topic: Array, Sliding Window, Hash Map
// Description: Compute the maximum sum of a subarray of fixed length k. Variant: the subarray's elements must be all distinct.
// Sample Input:
//   nums = [1,5,4,2,9,9,9], k = 3
// Sample Output:
//   max sum size k = 20  // [9,9,2] (plain)
//   max sum size k with all distinct = 15 // [5,4,6] or similar depending on input
//
// Functions and Complexities:
// - maxSumOfSubarrays: Time O(n), Space O(1)
// - maxSumOfDistinctSubarrays: Time O(n), Space O(k)

// Technique: Sliding Window
// Time: O(n), Space: O(1)
const maxSumOfSubarrays = (inputArray, target) => {
  let i = 0,
    j = 0;
  let sum = 0;
  let maxSum = 0;

  while (j < target) {
    sum += inputArray[j];
    j++;
  }

  while (j < inputArray.length) {
    sum = sum + inputArray[j] - inputArray[i];
    maxSum = Math.max(sum, maxSum);
    j++;
    i++;
  }

  return maxSum;
};

// Technique: Sliding Window + Hash Map
// Time: O(n), Space: O(k)
const maxSumOfDistinctSubarrays = (inputArray, target) => {
  let sum = 0;
  let maxSum = 0;

  const finalResultMap = {};

  for (let i = 0; i < inputArray.length; i++) {
    sum += inputArray[i];
    finalResultMap[inputArray[i]] = (finalResultMap[inputArray[i]] || 0) + 1;

    if (i >= target) {
      leftMostElement = inputArray[i - target];
      sum -= leftMostElement;
      finalResultMap[leftMostElement]--;
      if (finalResultMap[leftMostElement] === 0)
        delete finalResultMap[leftMostElement];
    }

    if (i >= target - 1) {
      const finalResultMapLength = Object.entries(finalResultMap).length;

      if (finalResultMapLength === target) maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
};

const inputArray = [1, 5, 4, 2, 9, 9, 9];

const target = 3;

const finalResult = maxSumOfSubarrays(inputArray, target);

const finalResultDistinct = maxSumOfDistinctSubarrays(inputArray, target);

console.log("Final Result", finalResult);

console.log("Final Result Distinct", finalResultDistinct);
