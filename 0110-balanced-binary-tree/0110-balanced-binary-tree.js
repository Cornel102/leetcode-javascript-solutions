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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root === null) return true;
    
    function height(node) {
        if (node === null) return 0;
        return 1 + Math.max(height(node.left), height(node.right));
    }
    
    let leftHeight = height(root.left);
    let rightHeight = height(root.right);
    
    if (Math.abs(leftHeight - rightHeight) > 1) return false;
    
    return isBalanced(root.left) && isBalanced(root.right);
};
