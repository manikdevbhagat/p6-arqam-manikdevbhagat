function hasDuplicate(arr) {
  //check if input is an array
  if (Object.prototype.toString.call(arr) !== "[object Array]") {
    throw new Error("Invalid Input! Input should be an array.");
  }
  let arrSet = new Set(arr);
  //arrSet will only have unique values of arr
  //if arr has duplicate arrSet.size will be less than arr.length
  return arrSet.size < arr.length;
}

const arr1 = [1, 1, 2, 2];
const arr2 = [1, 2, 3, 4, 5];

console.log(hasDuplicate(arr1));
console.log(hasDuplicate(arr2));
// console.log(hasDuplicate());
