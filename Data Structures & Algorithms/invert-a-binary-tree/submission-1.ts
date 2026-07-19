/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    invert(root: TreeNode | null) {
        if (!root) return

        const temp = root.left
        root.left = root.right
        root.right = temp

        this.invert(root.left)
        this.invert(root.right)
    }
    
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        this.invert(root)

        return root
    }
}
