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
    traverse(root: TreeNode | null, min: number | null, max: number | null): boolean {
        if (!root) {
            return true
        }

        if (min !== null && root.val <= min) {
            return false
        }

        if (max !== null && root.val >= max) {
            return false
        }

        return this.traverse(root.left, min, root.val) && this.traverse(root.right, root.val, max)
    }

    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root: TreeNode | null): boolean {
        return this.traverse(root, null, null)
    }
}