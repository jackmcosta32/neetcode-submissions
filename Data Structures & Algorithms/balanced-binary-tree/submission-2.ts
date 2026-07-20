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
    private balanced = true;

    private descend(node: TreeNode | null, height: number = 0): number {
        if (!node) {
            return height
        }

        const leftHeight = this.descend(node.left)
        const rightHeight = this.descend(node.right)

        this.balanced = this.balanced && Math.abs(leftHeight - rightHeight) <= 1

        return Math.max(leftHeight, rightHeight) + 1
    }

    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        this.balanced = true

        this.descend(root)

        return this.balanced
    }
}
