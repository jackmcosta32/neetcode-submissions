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
    // 1>2>3
    // 3>2>1
    
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let next: ListNode | null = null
        let prev: ListNode | null = null
        let curr: ListNode | null = head

        while (curr) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }

        return prev
    }
}
