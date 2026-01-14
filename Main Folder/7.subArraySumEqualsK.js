// Problem: Subarray Sum Equals K
// Topic: Array, Hash Map, Prefix Sum
// Description: Given an integer array and an integer k, find the total number of contiguous subarrays whose sum equals k.
// Sample Input:
//   nums = [1,1,1], k = 2
// Sample Output:
//   2
//
// Functions and Complexities:
// - subArraySum: Time O(n), Space O(n)

// Technique: Prefix Sum + Hash Map
// Time: O(n), Space: O(n)
const subArraySum = (numsArray, target) => {
  const preFixArray = [];
  let preFixSum = 0;
  let count = 0;

  const preFixSumMap = {};

  for (let i = 0; i < numsArray.length; i++) {
    preFixSum += numsArray[i];

    preFixArray[i] = preFixSum;
  }

  for (let j = 0; j < numsArray.length; j++) {
    if (target === preFixArray[j]) count++;
    const preFixTarget = preFixArray[j] - target;

    if (preFixTarget in preFixSumMap) {
      count = count + preFixSumMap[preFixTarget];
    }
    if (!(preFixArray[j] in preFixSumMap)) {
      preFixSumMap[preFixArray[j]] = 0;
    }

    preFixSumMap[preFixArray[j]]++;
  }

  return count;
};

const inputArray = [1, 1, 1];
const target = 2;

const subArraySumResult = subArraySum(inputArray, target);
console.log("Result is", subArraySumResult);
