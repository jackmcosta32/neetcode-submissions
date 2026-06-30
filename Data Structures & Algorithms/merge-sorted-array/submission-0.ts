class Solution {
    mergeArr(arr: number[], start: number, middle: number, end: number) {
        const left = arr.slice(start, middle + 1)
        const right = arr.slice(middle + 1, end + 1)
        
        let i = 0
        let j = 0
        let k = start
        
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                arr[k] = left[i]
                i++
                k++
            } else {
                arr[k] = right[j]
                j++
                k++
            }
        }

        while (i < left.length) {
            arr[k] = left[i]
            i++
            k++
        }

        while (j < right.length) {
            arr[k] = right[j]
            j++
            k++
        }
    }

    sort(arr: number[], start: number, end: number) {
        const size = end - start + 1

        if (size <= 1) {
            return arr
        }

        const middle = Math.floor((start + end) / 2)

        this.sort(arr, start, middle)
        this.sort(arr, middle + 1, end)
        this.mergeArr(arr, start, middle, end)

        return arr
    }

    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        for (let i = 0; i < n; i++) {
            const j = m + i // 0-indexed
            nums1[j] = nums2[i]
        }

        this.sort(nums1, 0, m+n)
    }
}
