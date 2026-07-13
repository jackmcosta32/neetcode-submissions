class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsMap = {} as Record<number, number>

        for (let i = 0; i < nums.length; i++) {
            const a = nums[i]
            const b = target - a

            if (b in numsMap) {
                return [i, numsMap[b]]
            }

            numsMap[a] = i
        }
    }
}
