class CustomQueueNode {
    public value: number
    public next: CustomQueueNode | undefined
    public prev: CustomQueueNode | undefined

    constructor (value: number) {
        this.value = value
    }

    public get isHead() {
        return !this.prev
    }

    public get isTail() {
        return !this.next
    }
}

// FIFO
class CustomQueue {
    private _size: number = 0
    private head: CustomQueueNode | undefined
    private tail: CustomQueueNode | undefined

    public peek(): Readonly<CustomQueueNode> | undefined {
        return this.tail
    }

    public enqueue(value: number): void {
        const newNode = new CustomQueueNode(value)
        
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            this.head = newNode
        }

        this._size += 1
    }

    public dequeue(): CustomQueueNode | undefined {
        if (this._size <= 0) {
            return
        }
        
        const dequeuedNode = this.tail

        if (dequeuedNode.isHead) {
            this.head = undefined
        } else {
            dequeuedNode.prev.next = undefined
        }
        
        this.tail = dequeuedNode.prev
        this._size -= 1

        return dequeuedNode
    }

    public get size(): number {
        return this._size
    }
}

class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        const studentQueue = new CustomQueue()
        const sandwicheQueue = new CustomQueue()

        students.forEach((student) => {
            studentQueue.enqueue(student)
        })

        sandwiches.forEach((sandwiche) => {
            sandwicheQueue.enqueue(sandwiche)
        })

        let hasDequeued = false
        let currentIndex = 0
        let initialStudentQueueSize = studentQueue.size

        while (
            sandwicheQueue.size &&
            studentQueue.size &&
            (hasDequeued || currentIndex < initialStudentQueueSize)
        ) {
            currentIndex += 1

            const currentStudent = studentQueue.dequeue()
            const currentSandwiche = sandwicheQueue.peek()

            if (currentSandwiche.value === currentStudent.value) {
                sandwicheQueue.dequeue()
                hasDequeued = true
            } else {
                studentQueue.enqueue(currentStudent.value)
            }

            if (hasDequeued && currentIndex === initialStudentQueueSize - 1) {
                currentIndex = 0
                hasDequeued = false
                initialStudentQueueSize = studentQueue.size
            }
        }

        return studentQueue.size
    }
}
