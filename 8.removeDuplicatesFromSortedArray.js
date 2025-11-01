// Remove duplicates from sorted array

const removeDuplicateArrayFunc = (inputArray) => {
  let resultMap = {};
  let uniqueCount = 0;

  for (let num of inputArray) {
    if (!resultMap.hasOwnProperty(num)) {
      resultMap[num] = 1;
      uniqueCount++;
    }
  }

  return uniqueCount;
};

const removeDuplicateArrayFuncTwoPointer = (inputArray) => {
  let i = 0;

  for (let j = 0; j < inputArray.length; j++) {
    if (inputArray[i] !== inputArray[j]) {
      i++;
      inputArray[i] = inputArray[j];
    }
  }

  return i + 1;
};

const inputArray = [1, 1, 2];

const finalResult = removeDuplicateArrayFunc(inputArray); // This is normal brute force approach with S.C. = O(n) & T.C. = O(n).

const finalResultTwoPointer = removeDuplicateArrayFuncTwoPointer(inputArray); // Two pointer approach with S.C. = O(1) & T.C. = O(n).

console.log("Final result is", finalResult);

console.log("Two Pointer Final result is", finalResultTwoPointer);

console.log(inputArray);
