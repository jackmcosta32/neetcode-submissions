class ListNode {
    constructor(
        public value: number,
        public next: ListNode | undefined, 
        public prev: ListNode | undefined
    ) {}

    public get isHead(): boolean {
        return !this.prev
    }

    public get isTail(): boolean {
        return !this.next
    }
}

class MyLinkedList {
    private size: number = 0
    public head: ListNode | undefined
    public tail: ListNode | undefined
    
    constructor() {}

    private getNode(index: number): ListNode | undefined {
        if (!this.head) {
            return
        }

        let currentIndex = 0
        let currentNode = this.head

        while (currentNode && currentIndex < index) {
            currentNode = currentNode.next
            currentIndex += 1
        }

        return currentNode
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        const node = this.getNode(index)

        return node?.value ?? -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val: number): void {
        const newNode = new ListNode(
            val,
            this.head,
            undefined
        )
        
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            this.head = newNode
        }

        this.size += 1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val: number): void {
        const newNode = new ListNode(
            val,
            undefined,
            this.tail
        )

        if (!this.tail) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.size += 1
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index: number, val: number): void {
        if (index > this.size) {
            return
        }
        
        if (index === 0) {
            return this.addAtHead(val)
        }

        if (index === this.size) {
            return this.addAtTail(val)
        }

        const node = this.getNode(index)

        // node-1 -> node
        // node-1 -> newNode -> node
        const newNode = new ListNode(
            val,
            node,
            node.prev
        )

        node.prev.next = newNode
        node.prev = newNode

        this.size += 1
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index: number): void {
        if (index >= this.size) {
            return
        }
        
        if (!this.head) {
            return
        }

        if (index === 0) {
            const nextNode = this.head.next
            this.head = nextNode
            nextNode.prev = undefined
        }
        
        else if (index === this.size - 1) {
            const prevNode = this.tail.prev
            this.tail = prevNode
            prevNode.next = undefined
        }

        else {
            const node = this.getNode(index)
            node.prev.next = node.next
            node.next.prev = node.prev
        }

        this.size -= 1
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
