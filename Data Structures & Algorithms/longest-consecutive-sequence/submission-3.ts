class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numSet = new Set<number>(nums)
        let longest = 0

        for (const num of numSet) {
            if (!numSet.has(num - 1)) {
                let length = 1

                while (numSet.has(num + length)) {
                    length += 1
                }

                longest = Math.max(length, longest)
            }
        }

        return longest
    }
}
