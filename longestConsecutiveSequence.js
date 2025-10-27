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
