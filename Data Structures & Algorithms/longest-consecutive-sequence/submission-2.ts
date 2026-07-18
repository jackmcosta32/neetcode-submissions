class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numSet = new Set<number>(nums)
        let longest = 0

        for (const num of numSet) {
            // Not the start of a sequence
            if (numSet.has(num - 1)) continue

            let length = 1

            while (numSet.has(num + length)) {
                length += 1
            }

            longest = Math.max(length, longest)
        }

        return longest
    }
}
