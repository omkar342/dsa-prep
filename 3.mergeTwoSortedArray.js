// Problem: Merge Two Sorted Arrays (In-place from the end)
// Topic: Array, Two Pointers
// Description: Given two sorted arrays, merge the second into the first as one sorted array. Typical variant assumes the first array has enough extra space at the end to hold the second array.
// Sample Input:
//   a = [1,4,6,_,_,_], b = [2,3,5]
// Sample Output:
//   a = [1,2,3,4,5,6]
//
// Functions and Complexities:
// - mergeArrays: Time O(m + n), Space O(1)

// Technique: Two Pointers (from end)
// Time: O(m + n), Space: O(1)
function mergeArrays(a, b) {
  // let i = 0, j = 0;
  const m = a.length,
    n = b.length;
  let i = m - 1,
    j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (a[i] > b[j]) a[k--] = a[i--];
    else a[k--] = b[j--];
  }
}

const arr1 = [1, 4, 6];
const arr2 = [2, 3, 5];

const result = mergeArrays(arr1, arr2);
console.log("Result is ", arr1);
