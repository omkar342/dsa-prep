const doesTargetExistBSFunc = (inputMatrix, target, midRow) => {
  let start = 0,
    end = inputMatrix[0].length;

  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);

    if (inputMatrix[midRow][mid] === target) return true;
    else if (target > inputMatrix[midRow][mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
};

const searchInMatrix = (inputMatrix) => {
  (m = inputMatrix.length), (n = inputMatrix[0].length);

  let startRow = 0,
    endRow = m - 1;

  while (startRow <= endRow) {
    midRow = startRow + Math.floor((endRow - startRow) / 2);

    if (
      target >= inputMatrix[midRow][0] &&
      target <= inputMatrix[midRow][n - 1]
    ) {
      // apply bs on this row
      return doesTargetExistBSFunc(inputMatrix, target, midRow);
    } else if (target >= inputMatrix[midRow[n - 1]]) {
      startRow = midRow + 1;
    } else {
      endRow = midRow - 1;
    }
  }

  return false;
};

const inputMatrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

const target = 3;

const finalResult = searchInMatrix(inputMatrix);

console.log("Final result", finalResult);
