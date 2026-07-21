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
    traverse(root: TreeNode | null): [number, number] {
        if (!root) {
            return [-Infinity, -Infinity]
        }

        const [leftSum, leftNodeSum] = this.traverse(root.left)
        const [rightSum, rightNodeSum] = this.traverse(root.right)
        
        const maxSum = Math.max(
            root.val,
            root.val + Math.max(leftSum, 0),
            root.val + Math.max(rightSum, 0),
        )

        const maxNodeSum = Math.max(
            leftNodeSum,
            rightNodeSum,
            root.val + Math.max(leftSum, 0) + Math.max(rightSum, 0)
        )

        return [maxSum, maxNodeSum]
    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root: TreeNode | null): number {
        const [maxPathSum, maxNodeSum] = this.traverse(root)

        return Math.max(maxNodeSum, maxPathSum)
    }
}