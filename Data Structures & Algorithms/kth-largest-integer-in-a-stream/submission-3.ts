class MinHeap {
    heap: number[] = [0]

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(nums: number[]) {
        // O(nlog(n))
        nums.forEach((num) => this.add(num))
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number) {
        this.heap.push(val)

        if (this.heap.length <= 2) {
            return
        }

        let currentIndex = this.heap.length - 1
        let parentIndex = Math.floor(currentIndex / 2)

        while(currentIndex > 1 && this.heap[currentIndex] < this.heap[parentIndex]) {
            const temp = this.heap[currentIndex]

            this.heap[currentIndex] = this.heap[parentIndex]
            this.heap[parentIndex] = temp

            currentIndex = parentIndex
            parentIndex = Math.floor(currentIndex / 2)
        }
    }

    pop(): number {
        if (this.heap.length <= 1) {
            return -1
        }

        let removedValue = this.heap[1]

        this.heap[1] = this.heap.pop()
        
        let currentIndex = 1

        while (2 * currentIndex < this.heap.length) {
            const leftChildIndex = 2 * currentIndex
            const rightChildIndex = leftChildIndex + 1
            const temp = this.heap[currentIndex]
            
            // Swap current with next right child
            if (
                rightChildIndex < this.heap.length
                && this.heap[rightChildIndex] < this.heap[leftChildIndex]
                && this.heap[currentIndex] > this.heap[rightChildIndex]
            ) {

                this.heap[currentIndex] = this.heap[rightChildIndex]
                this.heap[rightChildIndex] = temp

                currentIndex = rightChildIndex 
            }
            // Swap current with next left child
            else if (
                this.heap[currentIndex] > this.heap[leftChildIndex]
            ) {
                this.heap[currentIndex] = this.heap[leftChildIndex]
                this.heap[leftChildIndex] = temp

                currentIndex = leftChildIndex  
            }
            // If current is already on the right position
            else { 
                break
            }
        }

        return removedValue
    }

    get minValue(): number {
        return this.heap[1] ?? -1
    }

    get size(): number {
        return this.heap.length - 1
    }
}

// Size k heap, as the root node element will be the kth largest element
class KthLargest {
    private k: number
    private heap: MinHeap

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.k = k
        this.heap = new MinHeap(nums)

        while (this.heap.size > k) {
            this.heap.pop()
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        if (
            this.heap.size < this.k
        ) {
            this.heap.add(val)
        } else if (val > this.heap.minValue) {
            this.heap.add(val)
            this.heap.pop()
        }

        return this.heap.minValue
    }
}
