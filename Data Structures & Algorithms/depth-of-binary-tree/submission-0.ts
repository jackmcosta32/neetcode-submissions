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
    private descend(node: TreeNode | null, depth: number = 0): number {
        if (!node) {
            return depth
        }

        return Math.max(
            this.descend(node.left, depth + 1),
            this.descend(node.right, depth + 1)
        )
    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        return this.descend(root)
    }
}
