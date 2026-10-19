class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numsSet = new Set<number>(nums)
        return nums.length !== numsSet.size
    }
}
