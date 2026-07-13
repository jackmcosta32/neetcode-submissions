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
    private inOrderTraversal(root: TreeNode, acc: number[]) {
        if (!root) {
            return
        }

        this.inOrderTraversal(root.left, acc)
        acc.push(root.val)
        this.inOrderTraversal(root.right, acc)
    }

    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        const acc: number[] = []

        this.inOrderTraversal(root, acc)

        return acc[k - 1]
    }
}
