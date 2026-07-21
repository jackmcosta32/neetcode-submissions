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
    traverse(root: TreeNode | null, max: number): number {
        if (!root) {
            return 0
        }

        const currMax = Math.max(max, root.val)
        const leftGoodNodes = this.traverse(root.left, currMax)
        const rightGoodNodes = this.traverse(root.right, currMax)

        if (root.val >= max) {
            return leftGoodNodes + rightGoodNodes + 1
        }

        return leftGoodNodes + rightGoodNodes
    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root: TreeNode | null): number {
        if (!root) return 0

        return this.traverse(root, root.val)
    }
}
