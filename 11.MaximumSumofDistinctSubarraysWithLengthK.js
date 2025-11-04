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

const inputArray = [9, 9, 9];

const target = 3;

const finalResult = maxSumOfSubarrays(inputArray, target);

const finalResultDistinct = maxSumOfDistinctSubarrays(inputArray, target);

console.log("Final Result", finalResult);

console.log("Final Result Distinct", finalResultDistinct);
