var maxProfit = function (prices) {
  let profitToday = 0;
  let max = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    //update the minimum price encountered so far
    if (prices[i] < min) {
      min = prices[i];
    }
    //calculate profit if stock is sold today
    profitToday = prices[i] - min;
    //If profit today is greater than max profit, update max
    if (profitToday > max) {
      max = profitToday;
    }
  }
  return max;
};

const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));

//Time complexity - O(n), where n is the length of array
//Space Complexity - O(1)