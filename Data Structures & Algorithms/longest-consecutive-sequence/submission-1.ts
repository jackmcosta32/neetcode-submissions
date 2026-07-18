class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numSet = new Set<number>(nums)
        let longestConsecutive = 0

        for (const num of numSet) {
            const prevNum = num - 1
             
            if (numSet.has(prevNum)) {
                // Not the start of a sequence
                continue
            }

            let currentSequence = 1
            let nextNum = num + 1

            while (numSet.has(nextNum)) {
                nextNum += 1
                currentSequence += 1
            }

            longestConsecutive = Math.max(currentSequence, longestConsecutive)
        }

        return longestConsecutive
    }
}
