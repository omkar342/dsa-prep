const mergetTwoSortedArray = (arr1, arr2) => {
  const len1 = arr1.length;
  const len2 = arr2.length;

  let m = len1 - 1,
    n = len2 - 1;
  let k = len1 + len2 - 1;

  while (n >= 0) {
    if (arr1[m] > arr2[n]) {
      arr1[k--] = arr1[m--];
    } else {
      arr1[k--] = arr2[n--];
    }
  }
};

const arr1 = [1, 4, 6];
const arr2 = [2, 3, 5];

const result = mergetTwoSortedArray(arr1, arr2);
console.log("Result is ", arr1);
