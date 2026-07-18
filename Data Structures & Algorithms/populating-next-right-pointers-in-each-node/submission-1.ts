/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, left = null, right = null, next = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    private traverse(root: Node | null) {
        if (!root || !root.left) return

        root.left.next = root.right

        if (root.next) {
            root.right.next = root.next.left 
        }

        this.traverse(root.left)
        this.traverse(root.right)
    }

    /**
     * @param {Node} root
     * @return {Node}
     */
    connect(root: Node | null): Node {
        this.traverse(root)

        return root
    }
}