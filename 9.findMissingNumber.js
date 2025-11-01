const findTheMissingNumberInArray = (inputArray) => {
    let expectedSum = 0;
    let actualSum = 0;

    for (let i = 0; i < inputArray.length; i++){
        expectedSum += i;
        actualSum += inputArray[i];
    }

    expectedSum += inputArray.length;

    return expectedSum - actualSum;
};

const inputArray = [0, 1, 3];

const finalResult = findTheMissingNumberInArray(inputArray);

console.log("Final Result is", finalResult);
