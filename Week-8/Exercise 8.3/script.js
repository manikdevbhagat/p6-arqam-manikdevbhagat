var levelorderTraversal = function (root) {
    if (!root) return [];
    let nodeArr = new Array();
    let valArr = new Array();
    let i = 0;

    nodeArr.push([]);
    nodeArr[0].push(root);
    valArr.push([]);
    valArr[0].push(root.val);

    while (true) {
        if (nodeArr[i][0] === undefined) {
            nodeArr.pop();
            valArr.pop();
            break;
        } else {
            nodeArr.push([]);
            valArr.push([]);
            for (let j = 0; j < nodeArr[i].length; j++) {
                var currNode = nodeArr[i][j];
                if (currNode.left !== null) {
                    nodeArr[i + 1].push(currNode.left);
                    valArr[i + 1].push(currNode.left.val);
                }
                if (currNode.right !== null) {
                    nodeArr[i + 1].push(currNode.right);
                    valArr[i + 1].push(currNode.right.val);
                }
            }
        }

        i++;
    }
    return valArr;
};

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

var root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(2);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(6);

console.log(levelorderTraversal(root));  