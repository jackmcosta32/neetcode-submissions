class MaxHeap {
    public readonly values: number[] = []

    public get size(): number {
        return this.values.length
    }

    public peek(): number | undefined {
        return this.values[0]
    }

    private bubbleUp(index: number): undefined {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2)

            if (this.values[parentIndex] >= this.values[index]) {
                return
            }

            const temp = this.values[parentIndex]
            this.values[parentIndex] = this.values[index]
            this.values[index] = temp

            index = parentIndex
        }
    }

    public push(value: number): undefined {
        this.values.push(value)
        this.bubbleUp(this.values.length - 1)
    }

    private bubbleDown(index: number): undefined {
        while (true) {
            const left = index * 2 + 1
            const right = left + 1
            let smallest = index

            if (
                left < this.values.length &&
                this.values[left] > this.values[smallest]
            ) {
                smallest = left
            }

            if (
                right < this.values.length &&
                this.values[right] > this.values[smallest]
            ) {
                smallest = right
            }

            if (smallest === index) {
                return
            }

            const temp = this.values[index]
            this.values[index] = this.values[smallest]
            this.values[smallest] = temp

            index = smallest
        }
    }

    public pop(): number | undefined {
        if (this.values.length === 0) {
            return undefined
        }

        if (this.values.length === 1) {
            return this.values.pop()
        }

        const minimum = this.values[0]

        this.values[0] = this.values.pop()
        this.bubbleDown(0)

        return minimum
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        const heap = new MaxHeap()

        for (const num of nums) {
            heap.push(num)
        }

        let largest: number | undefined = undefined 

        for (let i = 0; i < k; i++) {
            if (!heap.size) {
                break
            }

            largest = heap.pop()

        }

        return largest
    }
}
