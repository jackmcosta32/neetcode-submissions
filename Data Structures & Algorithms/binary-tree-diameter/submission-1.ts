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
    private diameter: number = 0

    private descend(node: TreeNode | null): number {
        if (!node) {
            return 0
        }

        const heightLeft = this.descend(node.left)
        const heightRight = this.descend(node.right)

        this.diameter = Math.max(this.diameter, heightLeft + heightRight)

        return Math.max(heightLeft, heightRight) + 1
    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        this.diameter = 0
        this.descend(root)

        return this.diameter
    }
}
