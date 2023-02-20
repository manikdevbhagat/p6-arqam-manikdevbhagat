var hasPair = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        return true;
      }
    }
  }
  return false;
};

const nums = [5, 10, 3, 2, 50, 80];
const k = 78;

console.log(hasPair(nums, k));

//Time complexity - O(n**2), where n is the length of array
//Space Complexity - O(1)