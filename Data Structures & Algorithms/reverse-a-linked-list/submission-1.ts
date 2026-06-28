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
    // 0->1->2->3->4
    // 0<-1->2->3->4
    // 0<-1<-2->3->4
    // 0<-1<-2<-3->4
    // 0<-1<-2<-3<-4
    reverseList(head: ListNode | null): ListNode | null {
        if (!head?.next) {
            return head ?? null
        }
        
        let currNode = head
        let nextNode = head.next
        
        head.next = null

        while(nextNode) {
            const temp = nextNode.next
            nextNode.next = currNode
            currNode = nextNode
            nextNode = temp
        }

        return currNode
    }
}
