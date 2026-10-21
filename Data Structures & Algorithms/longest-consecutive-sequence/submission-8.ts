class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set<number>(nums)
        
        let maxCount = 0

        for (const num of set) {
            if (!set.has(num - 1)) {
                let count = 1

                while (set.has(num + count)) {
                    count += 1
                }

                maxCount = Math.max(maxCount, count)
            }
        }

        return maxCount
    }
}
