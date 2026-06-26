class LinkedListNode:
    def __init__(self, val, next=None, prev=None):
        self.val = val
        self.next = next
        self.prev = prev

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def get_node(self, index: int) -> int:
        curr_node = self.head

        for _ in range(index):
            curr_node = curr_node.next

            if curr_node is None:
                return None
        
        return curr_node

    def get(self, index: int) -> int:
        node = self.get_node(index)        
        val = -1 if not node else node.val

        print(self.getValues(), node, index, val)

        return val

    def insertHead(self, val: int) -> None:
        node = LinkedListNode(val)
        node.next = self.head

        if self.head is not None:
            self.head.prev = node
        else:
            self.tail = node
    
        self.head = node

    def insertTail(self, val: int) -> None:
        node = LinkedListNode(val)
        node.prev = self.tail
    
        if self.tail is not None:
            self.tail.next = node
        else:
            self.head = node
    
        self.tail = node

    def remove(self, index: int) -> bool:
        node = self.get_node(index)

        if node is None:
            return False

        if node.prev is not None:
            node.prev.next = node.next
        else:
            self.head = node.next

        if node.next is not None:
            node.next.prev = node.prev
        else:
            self.tail = node.prev
        
        return True

    def getValues(self) -> List[int]:
        values = []
        curr_node = self.head

        while curr_node:
            values.append(curr_node.val)
            curr_node = curr_node.next
        
        return values
