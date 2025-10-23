function mergeArrays (a, b){
    // let i = 0, j = 0;
    const m = a.length, n = b.length
    let i = m - 1, j = n - 1
    let k = m + n - 1;

    while(j >= 0){
        if (a[i] > b[j]) a[k--] = a[i--];
        else a[k--] = b[j--];
    }
}

const arr1 = [1,4,6];
const arr2 = [2,3,5];

const result = mergeArrays(arr1, arr2);
console.log("Result is ", arr1);