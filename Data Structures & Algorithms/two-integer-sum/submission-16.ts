class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const targetMap = new Map<number, number>()

        for (let j = 0; j < nums.length; j++) {
            const numJ = nums[j]
            const numI = target - numJ

            if (targetMap.has(numI)) {
                return [targetMap.get(numI), j]
            }

            targetMap.set(numJ, j)
        }

        return []
    }
}
