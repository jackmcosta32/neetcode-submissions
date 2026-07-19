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
    reverseList(node: ListNode | null): ListNode {
        if (!node.next) {
            return node // new node head
        }

        const head = this.reverseList(node.next)
        node.next.next = node
        node.next = null

        return head
    }


    /**
     * @param {ListNode} head
     * @return {number}
     */
    pairSum(head: ListNode | null): number {
        if (!head) return 0

        let slow = head
        let fast = head

        while (fast?.next) {
            slow = slow.next
            fast = fast.next.next
        }

        const headB = this.reverseList(slow)

        let maxSum = 0
        let currA = head
        let currB = headB

        while (currB) {
            maxSum = Math.max(maxSum, currA.val + currB.val)
            currA = currA.next
            currB = currB.next
        } 

        return maxSum
    }
}