function twoSum(inputArray, targetNumber) {
  let left = 0;
  let right = inputArray.length - 1;

  const resultArray = [];

  const sortedArray = inputArray.map((value, index) => ({
    value,
    index,
  }));

  sortedArray.sort((a, b) => a.value - b.value);

  console.log(sortedArray);

  // if (array[first] === targetNumber) return resultArray.push(first);

  while (left < right) {
    if (sortedArray[left].value + sortedArray[right].value === targetNumber) {
      resultArray.push(sortedArray[left].index, sortedArray[right].index);
      return resultArray;
    } else if (
      sortedArray[left].value + sortedArray[right].value <
      targetNumber
    ) {
      left++;
    } else {
      right--;
    }
  }

  return resultArray;
}

array = [2, 7, 11, 15];
targetNumber = 9;
const result = twoSum(array, targetNumber);
console.log("Result is", result);

function twoSumWithoutSorting(inputArray, targetNumber) {
  const resultMap = {};

  for (let i in inputArray) {
    const complement = targetNumber - inputArray[i];

    if (resultMap.hasOwnProperty(complement)) {
      return [resultMap[complement], i];
    }

    resultMap[inputArray[i]] = i;
  }

  return [];
}

const result2 = twoSumWithoutSorting(array, targetNumber);
