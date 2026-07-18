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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        let s = head
        let f = head?.next

        while (s && f) {
            if (s === f) {
                return true
            }

            s = s.next
            f = f.next?.next
        }

        return false
    }
}
