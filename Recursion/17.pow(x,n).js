/**
 * Problem: 50. Pow(x, n) (LeetCode Medium)
 * 
 * Description:
 * Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).
 * 
 * Constraints:
 * - -100.0 < x < 100.0
 * - -2^31 <= n <= 2^31 - 1
 * - n is an integer.
 * - Either x is not zero or n > 0.
 * - -10^4 <= x^n <= 10^4
 * 
 * Approach: Binary Exponentiation (Also known as Exponentiation by Squaring)
 * -------------------------------------------------------------------------
 * If we simplpy multiply x, n times, the time complexity is O(n).
 * Given n can be up to 2^31, O(n) will cause a Time Limit Exceeded (TLE).
 * 
 * We can obtain the result in O(log n) time using binary exponentiation.
 * The core idea is:
 *  - x^n = (x^2)^(n/2) if n is even
 *  - x^n = x * x^(n-1) if n is odd
 * 
 * Algorithm:
 * 1. Handle negative n: If n < 0, we calculate x^(-n) which is 1 / x^n.
 *    So, we set x = 1/x and n = -n.
 *    (Note: converting n to positive might overflow in languages with fixed integer sizes 
 *    if n is -2^31, but JavaScript 'Number' type can safely handle integers way beyond 2^31).
 * 
 * 2. Iterate while n > 0:
 *    - If n is odd (n % 2 === 1): Multiply the current result 'ans' by 'x'. Reduce n by 1.
 *    - If n is even: Square 'x' (x = x * x) and divide n by 2.
 * 
 * Time Complexity: O(log n) - We halve n in every other step.
 * Space Complexity: O(1) - We only use a few variables.
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (x === 0) return 0;
    
    // If n is negative, we want 1 / x^|n|. 
    // We can handle this by using 1/x as base and |n| as exponent, 
    // or just x as base and |n| as exponent and then taking reciprocal at the loop start/end.
    // Easier way: x = 1/x, n = -n.
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let ans = 1.0;
    
    // In JS, variables can hold large numbers, but we should be careful about infinite loops if n is not an integer check.
    // The problem guarantees n is an integer.
    
    while (n > 0) {
        // If n is odd
        if (n % 2 === 1) {
            ans = ans * x;
            n = n - 1; // Make it even
        } 
        // If n is even
        else {
            x = x * x;     // Square the base
            n = n / 2;     // Halve the exponent
        }
    }
    
    return ans;
};

// --- Driver / Testing Code ---

function runTestCases() {
    const testCases = [
        { x: 2.00000, n: 10, expected: 1024.00000 },
        { x: 2.10000, n: 3, expected: 9.26100 },
        { x: 2.00000, n: -2, expected: 0.25000 },
        { x: 0.00001, n: 2147483647, expected: 0 }, // Very large n, small x
        { x: 1.0, n: 2147483647, expected: 1.0 },   // 1^any = 1
        { x: -1.0, n: 2, expected: 1.0 },           // Even power of negative
        { x: -1.0, n: 3, expected: -1.0 }           // Odd power of negative
    ];

    console.log("Running Test Cases for 50. Pow(x, n)...\n");

    testCases.forEach((test, index) => {
        const result = myPow(test.x, test.n);
        const match = Math.abs(result - test.expected) < 1e-5; // Float comparison
        
        console.log(`Test Case ${index + 1}:`);
        console.log(`Input: x = ${test.x}, n = ${test.n}`);
        console.log(`Expected: ${test.expected}`);
        console.log(`Output:   ${result}`);
        console.log(`Status:   ${match ? "✅ PASSED" : "❌ FAILED"}`);
        console.log("---------------------------------------------------");
    });
}

// Execute tests
runTestCases();