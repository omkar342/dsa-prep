// Problem: Maximum Subarray (Kadane's Algorithm)
// Topic: Array, Dynamic Programming, Greedy
// Description: Find the contiguous subarray within a one-dimensional array of numbers that has the largest sum.
// Sample Input:
//   nums = [-2,1,-3,4,-1,2,1,-5,4]
// Sample Output:
//   6  // subarray [4,-1,2,1]
//
// Functions and Complexities:
// - maxSumSubArray: Time O(n), Space O(1)

// Technique: Kadane's Algorithm
// Time: O(n), Space: O(1)
const maxSumSubArray = (nums) => {
  const INT_MIN = -20000000;
  let currSum = 0;
  let maxSum = INT_MIN;

  for (let i in nums) {
    currSum = currSum + nums[i];
    maxSum = Math.max(maxSum, currSum);

    if (currSum < 0) {
      currSum = 0;
    }
  }

  return maxSum;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const nums2 = [-1, -2, -3, -4, -5];
const result = maxSumSubArray(nums);
console.log("Result is ", result);
