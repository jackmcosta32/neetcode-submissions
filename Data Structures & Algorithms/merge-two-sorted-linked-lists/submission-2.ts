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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let curr1 = list1
        let curr2 = list2
        let head: ListNode | null = null

        if (!curr1 && !curr2) {
            return null
        }

        if (curr1 && !curr2) {
            return curr1
        }

        if (!curr1 && curr2) {
            return curr2
        }

        if (curr1.val <= curr2.val) {
            head = curr1
            curr1 = curr1.next
        } else {
            head = curr2
            curr2 = curr2.next
        }

        let currNode = head

        while (curr1 || curr2) {
            if (
                !curr2 ||
                (curr1 && curr1.val <= curr2.val)
            ) {
                currNode.next = curr1
                curr1 = curr1.next
            }
            
            else if (
                !curr1 ||
                (curr2 && curr2.val <= curr1.val)
            ) {
                currNode.next = curr2
                curr2 = curr2.next
            }

            currNode = currNode.next
        }

        return head
    }
}
