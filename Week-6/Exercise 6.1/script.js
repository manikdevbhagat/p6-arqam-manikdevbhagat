var maxSubArr = function(arr) {
  let max = arr[0];
  //Traverse from left to right
  //For each index i, if value at index i-1 is positive, add to the value of index i
  //if value at index i is greater than max, update max
  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.max(0, arr[i - 1]) + arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArr(arr));
