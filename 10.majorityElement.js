// Problem: Majority Element
// Description: Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊n/2⌋ times. Assume the array is non-empty and the majority element always exists.
// Sample Input:
//   [2,2,1,1,1,2,2]
// Sample Output:
//   2
//
// Functions and Complexities:
// - majorityElement: Time O(n), Space O(1) using Boyer-Moore Voting Algorithm

// Time: O(n), Space: O(1)
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
