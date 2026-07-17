class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numSet = new Set<number>()
        let hasDuplicates = false

        for (const num of nums) {
            if (numSet.has(num)) {
                hasDuplicates = true
                break
            }
            
            numSet.add(num)
        }

        return hasDuplicates
    }
}
