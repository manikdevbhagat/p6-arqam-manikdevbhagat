function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var maxDepth = function (root) {
  let curr = root;
  if (curr === null) {
    return 0;
  } else if (curr.left === null && curr.right === null) {
    return 1;
  } else {
    return 1 + Math.max(maxDepth(curr.left), maxDepth(curr.right));
  }
};

var isValidBST = function (root) {
  let curr = root;
};