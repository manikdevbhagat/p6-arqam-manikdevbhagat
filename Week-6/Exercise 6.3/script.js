var sortArray = function (nums) {
  let first = 0;
  let curr = 0;
  let last = nums.length - 1;
  let tmp;

  while (curr <= last) {
    //if 0 is encountered, exchange current and first index
    if (nums[curr] === 0) {
      tmp = nums[curr];
      nums[curr] = nums[first];
      nums[first] = tmp;
      first++;
      curr++;
    }
    //if 2 is encountered, exchange current and last index
    else if (nums[curr] === 2) {
      tmp = nums[curr];
      nums[curr] = nums[last];
      nums[last] = tmp;
      last--;
      curr++;
    } else curr++;
  }
  console.log(nums);
};

var nums = [2, 0, 2, 1, 1, 0];

sortArray(nums);

//Time complexity - O(n), where n is the length of array
//Space Complexity - O(1)