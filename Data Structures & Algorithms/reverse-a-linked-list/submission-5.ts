/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if (!head) return null

        let tailNode: ListNode | null
        
        const reverseNode = (currentNode: ListNode): ListNode => {
            if (currentNode.next) {
                const prevNode = reverseNode(currentNode.next)
                prevNode.next = currentNode
            } else {
                tailNode = currentNode
            }

            currentNode.next = null

            return currentNode
        }

        reverseNode(head)

        return tailNode
    }
}
