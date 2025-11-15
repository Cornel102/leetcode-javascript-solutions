/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;

    const queue = [{ node: root, sum: root.val }];

    while (queue.length) {
        const { node, sum } = queue.shift();

        // Check leaf
        if (!node.left && !node.right && sum === targetSum) {
            return true;
        }

        if (node.left) queue.push({ node: node.left, sum: sum + node.left.val });
        if (node.right) queue.push({ node: node.right, sum: sum + node.right.val });
    }

    return false;
};
