class MaxHeap {
    private values: number[] = []

    public get size(): number {
        return this.values.length
    }

    public peek(): number | undefined {
        return this.values.at(0)
    }

    private bubbleUp(index: number) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2)

            if (this.values[parentIndex] >= this.values[index]) {
                return
            }

            const temp = this.values[index]
            this.values[index] = this.values[parentIndex]
            this.values[parentIndex] = temp

            index = parentIndex
        }
    }

    public push(value: number): void {
        this.values.push(value)
        this.bubbleUp(this.values.length - 1)
    }

    private bubbleDown(index: number) {
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
        if (!this.values.length) {
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
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        const heap = new MaxHeap()

        for (const stone of stones) {
            heap.push(stone)
        }

        while (heap.size > 1) {
            const a = heap.pop()
            const b = heap.pop()
            const diff = Math.abs(a - b)

            if (diff > 0) {
                heap.push(diff)
            }
        }

        return heap.peek() ?? 0
    }
}
