function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  
  var isValidBST = function (root) {
    let curr = root;
    if (!curr) return true;
    let minVal = -1 * Number.MAX_VALUE;
    let maxVal = Number.MAX_VALUE;
  
    return helper(curr, minVal, maxVal);
  
    function helper(curr, minVal, maxVal) {
      if (curr === null) {
        return true;
      }
      if (curr.val >= maxVal || curr.val <= minVal) {
        return false;
      }
  
      return (
        true &&
        helper(curr.left, minVal, curr.val) &&
        helper(curr.right, curr.val, maxVal)
      );
    }
  };
  
  var bst = new TreeNode(0);
  console.log(isValidBST(bst));
  