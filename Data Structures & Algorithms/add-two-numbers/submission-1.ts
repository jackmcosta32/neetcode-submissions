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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        const head = new ListNode()
        
        let curr1 = l1
        let curr2 = l2
        let currSum = head
        let carrier = 0

        while (carrier || curr1 || curr2) {
            const val1 = curr1?.val ?? 0
            const val2 = curr2?.val ?? 0
            const sum = (val1 + val2 + carrier)
            const remainder = sum % 10 
            carrier = Math.floor(sum / 10)

            currSum.next = new ListNode(remainder)

            currSum = currSum.next
            curr1 = curr1?.next
            curr2 = curr2?.next
        }

        return head.next
    }
}
