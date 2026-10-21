class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set<number>(nums)
        
        let maxCount = 0

        for (const num of nums) {
            if (!set.has(num)) {
                continue
            }

            let count = 1
            let nextNum = num + 1

            while (set.has(nextNum)) {
                set.delete(nextNum)
                count += 1
                nextNum += 1
            }

            let prevNum = num - 1

            while (set.has(prevNum)) {
                set.delete(prevNum)
                count += 1
                prevNum -= 1
            }

            set.delete(num)

            maxCount = Math.max(maxCount, count)
        }

        return maxCount
    }
}
