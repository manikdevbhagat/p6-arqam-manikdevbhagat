var threeSum /* ;) */ = function (nums, target) {
  let sum;
  let diff = nums[0] + nums[1] + nums[2] - target;
  let n = nums.length;
  nums.sort((a, b) => a - b);

  for (let first = 0; first < n - 2; first++) {
    let second = first + 1;
    let third = n - 1;
    while (second < third) {
      sum = nums[first] + nums[second] + nums[third];
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
var target = -8;
console.log(threeSum(nums, target));

//Time complexity - O(n**2), where n is the length of array
//Space Complexity - O(1)
