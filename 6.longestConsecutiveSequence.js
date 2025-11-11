// Problem: Longest Consecutive Sequence
// Description: Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
// Sample Input:
//   [100,4,200,1,3,2]
// Sample Output:
//   4  // sequence [1,2,3,4]
//
// Functions and Complexities:
// - returnLongestConsecutiveSequence: Time O(n), Space O(n)

// Time: O(n), Space: O(n)
const returnLongestConsecutiveSequence = (inputArray) => {
  const finalResultSet = new Set(inputArray);

  let longestConssResult = 0;

  for (let num of inputArray) {
    if (!finalResultSet.has(num - 1)) {
      let currentLongestConssSequence = 1;

      while (finalResultSet.has(num + 1)) {
        currentLongestConssSequence++;
        num++;
      }

      longestConssResult = Math.max(
        longestConssResult,
        currentLongestConssSequence
      );
    }
  }
  return longestConssResult;
};

const inputArray = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

const longestConssSequenceResult = returnLongestConsecutiveSequence(inputArray);

console.log("Result is", longestConssSequenceResult);
