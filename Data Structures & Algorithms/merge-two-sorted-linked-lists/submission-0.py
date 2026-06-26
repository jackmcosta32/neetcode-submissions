class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        curr1 = list1
        curr2 = list2
        
        if not curr1:
            return curr2
        
        if not curr2:
            return curr1

        if curr1.val <= curr2.val:
            head = curr1
            curr1 = curr1.next
        else:
            head = curr2
            curr2 = curr2.next
        
        currMerged = head

        while curr1 or curr2:
            if not curr1:
                currMerged.next = curr2
                break
            
            if not curr2:
                currMerged.next = curr1
                break
            
            if curr1.val <= curr2.val:
                currMerged.next = curr1
                curr1 = curr1.next
            else:
                currMerged.next = curr2
                curr2 = curr2.next

            currMerged = currMerged.next

        return head