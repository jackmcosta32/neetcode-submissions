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
    getMinNode(root: TreeNode | null) {
        let currentNode: TreeNode = root

        while(currentNode && currentNode.left) {
            currentNode = currentNode.left
        }
         
        return currentNode
    }

    /**
     * @param {TreeNode} root
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root: TreeNode | null, key: number): TreeNode {
        if (!root) {
            return null
        }

        if (key > root.val) {
            root.right = this.deleteNode(root.right, key)
        } else if (key < root.val) {
            root.left = this.deleteNode(root.left, key)
        } else {
            if (root.left === null) {
                return root.right
            } else if (root.right === null) {
                return root.left
            } else {
                const rightLeafNode = this.getMinNode(root.right)
                root.val = rightLeafNode.val
                root.right = this.deleteNode(root.right, rightLeafNode.val)
            }
        }

        return root
    }
}
