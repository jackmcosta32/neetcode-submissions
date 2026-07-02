type Point2D = number[]

class Solution {
    private root: Point2D = [0,0]

    private squaredDistance(a: Point2D, b: Point2D = this.root) {
        return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2
    }

    private sort(arr: Point2D[], start: number, end: number) {
        // There is only one or less slot on the sub-array, thus
        // the sub-array is already sorted
        if (end - start + 1 <= 1) {
            return arr
        }

        let left = start
        const pivot = arr[end]
        const pivotRootSquaredDistance = this.squaredDistance(pivot)

        // I could improve this later by caching the distances to
        // root in a tuple/distance KV map
        for (let i = start; i < end; i++) {
            if (this.squaredDistance(arr[i]) < pivotRootSquaredDistance) {
                const temp = arr[left]
                arr[left] = arr[i]
                arr[i] = temp
                left++
            }
        }

        // Update the pivot position
        arr[end] = arr[left]
        arr[left] = pivot

        // Sorts the left sub-array containing all the smaller values
        // compared to the pivot
        this.sort(arr, start, left - 1)

        // Sorts the right sub-array containing all the larger values
        // compared to the pivot
        this.sort(arr, left + 1, end)

        return arr
    }

    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: Point2D[], k: number): Point2D[] {
        const sortedPoints = this.sort(points, 0, points.length - 1)

        return sortedPoints.slice(0, k)
    }
}