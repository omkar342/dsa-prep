// Problem: 121. Best Time to Buy and Sell Stock (Easy)
// Topic: Array, Dynamic Programming, Greedy
// Description: Given an array prices where prices[i] is the price of a given stock on the i-th day, maximize profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Sample Input:
//   [7,1,5,3,6,4]
// Sample Output:
//   5  // buy at 1, sell at 6
//
// Functions and Complexities:
// - bestTimeToBuySellStock: Time O(n), Space O(1)

// Technique: Greedy / One Pass
// Time: O(n), Space: O(1)
const bestTimeToBuySellStock = (inputArray) => {
  let maxProfit = 0;
  let bestBuy = inputArray[0];

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > bestBuy) {
      maxProfit = Math.max(maxProfit, inputArray[i] - bestBuy);
    }

    bestBuy = Math.min(bestBuy, inputArray[i]);
  }

  return maxProfit;
};

const inputArray = [7, 1, 5, 3, 6, 4];

// const inputArray = [7, 6, 4, 3, 1];

const finalResult = bestTimeToBuySellStock(inputArray);

console.log("Final Result is", finalResult);
