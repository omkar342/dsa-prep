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
const result = maxSumSubArray(nums2);
console.log("Result is ", result);
