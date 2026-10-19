class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numByIndex = new Map<number, number>()
        
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i]

            if (numByIndex.has(diff)) {
                return [numByIndex.get(diff), i]
            }

            numByIndex.set(nums[i], i)
        }

        return []
    }
}
