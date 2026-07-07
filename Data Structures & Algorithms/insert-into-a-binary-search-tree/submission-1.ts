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
    insert(root: TreeNode | null, node: TreeNode): TreeNode {
        if (!root || root.val === node.val) {
            return node
        }

        if (node.val < root.val) {
            root.left = this.insert(root.left, node)
        }

        if (node.val > root.val) {
            root.right = this.insert(root.right, node)
        }

        return root
    }
    
    /**
     * @param {TreeNode} root
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root: TreeNode | null, val: number): TreeNode {
        const node = new TreeNode(val)

        if (!root) return node

        this.insert(root, node)

        return root
    }
}
