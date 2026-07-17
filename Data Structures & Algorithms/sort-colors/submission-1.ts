class Solution {
    bucketSort(arr: number[]) {
        const colorsBucket: number[] = [0, 0, 0]

        for (const color of arr) {
            colorsBucket[color] += 1
        }

        let i = 0

        for (let n = 0; n < colorsBucket.length; n++) {
            for (let j = 0; j < colorsBucket[n]; j++) {
                arr[i] = n
                i++
            }
        }
    }
    
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        this.bucketSort(nums)
    }
}
