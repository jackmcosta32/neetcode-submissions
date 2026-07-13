type Point2D = [number, number]

const ROOT: Point2D = [0, 0]

class MinHeap<TValue> {
    private heap: Array<[number, TValue]> = [[0, undefined]]

    push(value: [number, TValue]) {
        this.heap.push(value)
        
        if (this.heap.length <= 2) {
            return
        }

        // Precolade up
        let currentIndex = this.heap.length - 1
        let parentIndex = Math.floor(currentIndex / 2)

        while (
            currentIndex > 1 &&
            this.heap[currentIndex][0] < this.heap[parentIndex][0]
        ) {
            const temp = this.heap[currentIndex]

            this.heap[currentIndex] = this.heap[parentIndex]
            this.heap[parentIndex] = temp

            currentIndex = parentIndex
            parentIndex = Math.floor(currentIndex / 2)
        }
    }

    pop(): [number, TValue] | undefined {
        if (this.heap.length < 1) {
            return
        }

        const removedElement = this.heap[1]

        this.heap[1] = this.heap.pop()

        let currentIndex = 1

        // Precolade down
        while (
            2 * currentIndex < this.heap.length
        ) {
            const leftNodeIndex = 2 * currentIndex
            const righNodeIndex = leftNodeIndex + 1
            const temp = this.heap[currentIndex] 

            if (
                righNodeIndex < this.heap.length &&
                this.heap[righNodeIndex][0] < this.heap[leftNodeIndex][0] &&
                this.heap[currentIndex][0] > this.heap[righNodeIndex][0]
            ) {
                this.heap[currentIndex] = this.heap[righNodeIndex]
                this.heap[righNodeIndex] = temp

                currentIndex = righNodeIndex
            }

            else if (
                this.heap[currentIndex][0] > this.heap[leftNodeIndex][0]
            ) {
                this.heap[currentIndex] = this.heap[leftNodeIndex]
                this.heap[leftNodeIndex] = temp

                currentIndex = leftNodeIndex
            }

            else {
                break
            }
        }

        return removedElement
    }

    toArray(): Array<[number, TValue]> {
        return this.heap.slice(1)
    }

    get size(): number {
        return this.heap.length - 1
    }
}

class Solution {
    getSquaredEuclideanDistance(a: Point2D, b: Point2D): number {
        return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2
    }

    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: Point2D[], k: number): Point2D[] {
        const heap = new MinHeap<Point2D>()

        points.forEach((point) => {
            heap.push([this.getSquaredEuclideanDistance(point, ROOT), point])
        })

        const res: Point2D[] = []

        for (let i = 0; i < k; i++) {
            res[i] = heap.pop()[1]
        }

        return res
    }
}
