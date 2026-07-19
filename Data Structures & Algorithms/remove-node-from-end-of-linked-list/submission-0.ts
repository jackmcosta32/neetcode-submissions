/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

//
// 1,2,3,4,5 - 2
// -,-,-,x,-
// l,-,r,-,-
// -,l,-,r,-
// -,-,l,-,r

//
// 1,2,3,4,5 - 3
// -,-,x,-,-
// l,-,-,r,-
// -,l,-,-,r

//
// 1,2,3 - 3
// x,-,-,
// l,-,-,r

//
// 1 - 1
// x
// l,r

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        if (!head) {
            return null
        }

        let left = head
        let right = head

        for (let i = 0; i < n; i++) {
          right = right.next  
        }

        if (!right) {
          return head.next
        }

        while (right.next) {
            left = left.next
            right = right.next
        }

        const removed = left.next
        left.next = removed.next

        return head
    }
}