const reverseAnArray = (inputArray) => {
  let resultArray = [];

  let start = 0,
    end = inputArray.length - 1;

  let tempChar;

  while (start < end) {
    tempChar = inputArray[start];
    inputArray[start] = inputArray[end];
    inputArray[end] = tempChar;
    start++;
    end--;
  }

  return inputArray;
};

const inputArray = ["h", "e", "l", "l", "o"];

const reverseAnArrayResult = reverseAnArray(inputArray);

console.log("Result is:", reverseAnArrayResult);


// S.C. = O(1)
// T.C. = O(n)