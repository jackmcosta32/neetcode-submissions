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
    traverse(root: TreeNode | null, height: number = 0): [number, boolean] {
        if (!root) return [0, true]

        const [leftHeight, isLeftBalanced] = this.traverse(root.left, height)
        const [rightHeight, isRightBalanced] = this.traverse(root.right, height)
        const nodeHeight = Math.max(leftHeight, rightHeight) + 1
        const isNodeBalanced = Math.abs(leftHeight - rightHeight) <= 1
        const isTreeBalanced = isNodeBalanced && isLeftBalanced && isRightBalanced

        return [nodeHeight, isTreeBalanced]
    }

    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        const [_, isTreeBalanced] = this.traverse(root)

        return isTreeBalanced
    }
}
