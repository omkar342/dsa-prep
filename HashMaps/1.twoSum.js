// Problem: Two Sum (Indices of two numbers that add up to target)
// Topic: Array, Hash Map, Two Pointers
// Description: Given an array of integers and a target, return indices of the two numbers such that they add up to the target. Assume exactly one solution and you may not use the same element twice.
// Sample Input:
//   nums = [2, 7, 11, 15], target = 9
// Sample Output:
//   [0, 1]
//
// Functions and Complexities:
// - twoSum: Time O(n log n) due to sorting, Space O(n) for value-index pairs
// - twoSumWithoutSorting: Time O(n), Space O(n) using a hashmap

// Technique: Two Pointers (after sorting)
// Time: O(n log n), Space: O(n)
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

// Technique: Hash Map
// Time: O(n), Space: O(n)
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
