class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numsSet = new Set<number>(nums)

        return numsSet.size !== nums.length
    }
}
