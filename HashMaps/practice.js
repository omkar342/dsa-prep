// Max sum subarray

const maxSumSubArray = (inputArray) => {
  let maxSum = -1;
  let currSum = 0;

  for (const element of inputArray) {
    currSum += element;
    maxSum = Math.max(maxSum, currSum);

    if (currSum < 0) currSum = 0;
  }

  return maxSum;
};

const inputArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const finalResult = maxSumSubArray(inputArray);

console.log("Final result is", finalResult);

// Move Zeroes to end

const moveZerosToEndTwoPointer = (nums) => {
  let i = 0,
    j = 0;

  while (j < nums.length) {
    if (nums[j] !== 0) {
      nums[i] = nums[j];
      i++;
    }
    j++;
  }

  while (i < nums.length) {
    nums[i] = 0;
    i++;
  }

  return nums;
};

const nums = [0, 1, 0, 3, 12];

const result = moveZerosToEndTwoPointer(nums);

console.log("Result is", result);

// Two sum

const twoSum = (array, targetNumber) => {
  const resultMap = {};

  for (let i in array) {
    const tempNumber = targetNumber - array[i];

    if (resultMap.hasOwnProperty(tempNumber)) {
      return [resultMap[tempNumber], i];
    }

    resultMap[array[i]] = i;
  }

  return [];
};

array = [2, 7, 11, 15];
targetNumber = 9;
const twoSumResult = twoSum(array, targetNumber);
console.log("Two sum Result is", twoSumResult);
