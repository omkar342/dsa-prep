const swap = (element1, element2, inputArray) => {
  const temp = inputArray[element1];
  inputArray[element1] = inputArray[element2];
  inputArray[element2] = temp;
};

const sortColors = (inputArray) => {
  const inputArrayLength = inputArray.length;

  let low = 0,
    mid = 0,
    high = inputArrayLength - 1;

  while (mid <= high) {
    if (inputArray[mid] === 0) {
      swap(mid, low, inputArray);
      mid++, low++;
    } else if (inputArray[mid] === 1) {
      mid++;
    } else {
      swap(high, mid, inputArray);
      high--;
    }
  }
};

const inputArray = [2, 0, 2, 1, 1, 0];

sortColors(inputArray);

console.log("Final result is", inputArray);
