var nextGreaterElements = function (nums) {
  let stack = [];

  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
      nums[stack.pop()] = nums[i];
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    nums[stack.pop()] = -1;
  }

  return nums;
};

let nums = [1, 2, 3, 4, 3];

console.log(nextGreaterElements(nums));

//Time Complexity - O(n), where n is the length of array
//Space Complexity - O(n), where n is the length of array
