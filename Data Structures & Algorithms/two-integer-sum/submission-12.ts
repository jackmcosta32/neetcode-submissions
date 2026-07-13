class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsMap = new Map<number, number>()

        for (let i = 0; i < nums.length; i++) {
            const a = nums[i]
            const b = target - a

            if (numsMap.has(b)) {
                return [i, numsMap.get(b)]
            }

            numsMap.set(a, i)
        }
    }
}
