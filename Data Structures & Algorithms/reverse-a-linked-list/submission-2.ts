/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// 1>2>3

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if (!head) return null

        let tail: ListNode | null = null

        const reverseNode = (currentNode: ListNode) => {
            if (currentNode.next) {
                const prevNode = reverseNode(currentNode.next)
                prevNode.next = currentNode
            } else {
                tail = currentNode
            }
            
            currentNode.next = null

            // Last linked list element
            return currentNode
        }

        reverseNode(head)
        
        return tail
    }
}
