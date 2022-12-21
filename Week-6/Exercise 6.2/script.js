var spiralOrder = function (matrix) {
  if (Object.prototype.toString.call(matrix) !== "[object Array]") {
    throw new Error("Invalid Input! Input should be an array.");
  }

  if (matrix.length === 0) {
    return [];
  }

  let spiral = [];
  let height = matrix.length;
  let width = matrix[0].length;
  let top = 0,
    left = 0;
  let bottom = height - 1;
  let right = width - 1;

  while (top <= bottom && left <= right) {
    //if only one row remaining, push all elements of the row
    if (top === bottom) {
      for (let x = left; x <= right; x++) {
        spiral.push(matrix[top][x]);
      }
    }
    //if only one column remaining, push all elements of the column
    else if (top < bottom && left === right) {
      for (let y = top; y <= bottom; y++) {
        spiral.push(matrix[y][right]);
      }
    } 
    //if two rows remaining, push first row normally and second row is reverse
    else if (bottom - top === 1) {
      for (let x = left; x <= right; x++) {
        spiral.push(matrix[top][x]);
      }
      for (let x = right; x >= left; x--) {
        spiral.push(matrix[bottom][x]);
      }
    } 
    //else complete full spiral
    else {
      //push to row
      for (let x = left; x <= right; x++) {
        spiral.push(matrix[top][x]);
      }
      //push right-most column avoiding top and bottom row
      for (let y = top + 1; y <= bottom - 1; y++) {
        spiral.push(matrix[y][right]);
      }
      //push bottom row in reverse
      for (let x = right; x >= left; x--) {
        spiral.push(matrix[bottom][x]);
      }
      //push left-most column in reverse avoiding top and bottom row
      for (let y = bottom - 1; y >= top + 1; y--) {
        spiral.push(matrix[y][left]);
      }
    }
    top++;
    bottom--;
    left++;
    right--;
  }
  return spiral;
};

const matrix = [
  [1, 2, 3, 4, -1],
  [5, 6, 7, 8, -2],
  [9, 10, 11, 12, -3],
  [13, 14, 15, 16, -4],
];

console.log(spiralOrder(matrix));

//Time Complexity - O(m*n), where m is number of rows and n is number of columns
//Space Complexity - O(m*n), where m is number of rows and n is number of columns
