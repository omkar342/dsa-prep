const majorityElement = (inputArray) => {
  let count = 0,
    element = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (count === 0) {
      element = inputArray[i];
    }

    if (element === inputArray[i]) count++;
    else count--;
  }

  return element;
};

const inputArray = [2, 2, 1, 1, 1, 2, 2];

// [3,2,3]

const finalResult = majorityElement(inputArray);

console.log("Final result is", finalResult);
