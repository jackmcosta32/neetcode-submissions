class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numsSet = new Set<number>()

        for (const num of nums) {
            if (numsSet.has(num)) {
                return true
            }

            numsSet.add(num)
        }

        return false
    }
}
