const findTheDuplicate = (inputArray) => {
    let slow = inputArray[0], fast = inputArray[0];
    do{
        slow = inputArray[slow];
        fast = inputArray[inputArray[fast]];

    }while(slow !== fast)

    slow = inputArray[0];

    while(slow !== fast){
        fast = inputArray[fast];
        slow = inputArray[slow];
    }

    return slow;
};

const inputArray = [3,3,3,3,3];

const findTheDuplicateResult = findTheDuplicate(inputArray);

console.log("Duplicate is:", findTheDuplicateResult);
