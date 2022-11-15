var threeSum /* ;) */ = function (nums, target) {
  let sum;
  let diff = nums[0] + nums[1] + nums[2] - target;
  let n = nums.length;
  let sortedArr = nums.sort((a, b) => a - b);

  for (let first = 0; first < n - 2; first++) {
    let second = first + 1;
    let third = n - 1;
    while (second < third) {
      sum = sortedArr[first] + sortedArr[second] + sortedArr[third];
      if (sum === target) {
        return sum;
      } else if (sum < target) {
        if (Math.abs(sum - target) < Math.abs(diff)) {
          diff = sum - target;
        }
        second++;
      } else {
        if (Math.abs(sum - target) < Math.abs(diff)) {
          diff = sum - target;
        }
        third--;
      }
    }
  }
  sum = target + diff;
  return sum;
};

var nums = [-1, -2, -3, -4, -5, -6];
var target = -5;
console.log(threeSum(nums, target));
