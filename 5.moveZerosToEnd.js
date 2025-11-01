// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// This is a normal brute force approach SC:- O(n) & TC:- O(n)
function moveZerosToEnd(inputArray) {
  const outputArray = [];
  const inputArrayLenght = inputArray.length;
  let itrIndex = 0;

  for (let i in inputArray) {
    if (inputArray[i] !== 0) {
      outputArray.push(inputArray[i]);
      itrIndex++;
    }
  }

  console.log("itrIndex", itrIndex);

  while (itrIndex < inputArrayLenght) {
    outputArray.push(0);
    itrIndex++;
  }

  return outputArray;
}

const inputArray = [0, 1, 0, 3, 12];
const outputArray = moveZerosToEnd(inputArray);
console.log("Output array", outputArray);
