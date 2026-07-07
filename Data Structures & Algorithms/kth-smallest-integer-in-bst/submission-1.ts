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
    traverse(root: TreeNode | null, acc: number[]) {
        if (!root) return

        this.traverse(root.left, acc)
        acc.push(root.val)
        this.traverse(root.right, acc)
    }

    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        const acc: number[] = []
        
        this.traverse(root, acc)
        
        const kn = acc[k - 1]

        return kn
    }
}
