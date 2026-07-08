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

class QueueNode<TValue> {
    next: QueueNode<TValue> | null = null
    prev: QueueNode<TValue> | null = null

    constructor(public value: TValue) {}
}

class Fifo<TValue> {
    public length: number = 0
    private head: QueueNode<TValue> | null = null
    private tail: QueueNode<TValue> | null = null
    
    append(value: TValue) {
        const node = new QueueNode(value)
        
        if (!this.head) {
            this.head = node
        }

        node.prev = this.tail

        this.length += 1

        if (this.tail) {
            this.tail.next = node
        }

        this.tail = node
    }

    pop(): TValue | null {
        const node = this.head

        if (node) {
            this.head = node.next

            if (!this.head) {
                this.tail = null
            }

            this.length -= 1
        }

        return node.value
    }
}

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        const acc: number[][] = []

        if (!root) {
            return acc
        }

        const queue = new Fifo<[TreeNode, number]>()

        queue.append([root, 0])

        while (queue.length) {
            const [node, depth] = queue.pop()

            if (acc[depth]) {
                acc[depth].push(node.val)
            } else {
                acc[depth] = [node.val]
            }

            if (node.left) {
                queue.append([node.left, depth + 1])
            }

            if (node.right) {
                queue.append([node.right, depth + 1])
            }
        }

        return acc
    }
}
