/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// i = 1
// 1,2,3,4,5
// s
// -,f

// i = 2
// 1,2,3,4,5
// -,s
// -,-,-,f

// i = 3
// 1,2,3,4,5
// -,-,s
// -,-,-,-,-,f -> null

// i = 1
// 1,2,3,4
// s
// -,f

// i = 2
// 1,2,3,4
// -,s
// -,-,-,f

// i = 3
// 1,2,3,4
// -,-,s
// -,-,-,-,f -> null

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    middleNode(head: ListNode | null): ListNode {
        let fast: ListNode | null = head?.next
        let slow: ListNode | null = head

        while (fast) {
            slow = slow.next
            fast = fast.next?.next
        }
    
        return slow 
    }
}
