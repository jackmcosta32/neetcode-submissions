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
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root: TreeNode | null, targetSum: number): boolean {
        if (!root) {
            return false
        }

        const currSum = targetSum - root.val

        if (currSum === 0 && (!root.left && !root.right)) {
            return true
        }

        if (this.hasPathSum(root.left, currSum)) {
            return true
        }

        if (this.hasPathSum(root.right, currSum)) {
            return true
        }

        return false
    }
}
