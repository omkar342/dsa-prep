// Easy
// 121. Best Time to Buy and Sell Stock
// Array, Basics of DP

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

// const inputArray = [7, 1, 5, 3, 6, 4];

const inputArray = [7, 6, 4, 3, 1];

const finalResult = bestTimeToBuySellStock(inputArray);

console.log("Final Result is", finalResult);
