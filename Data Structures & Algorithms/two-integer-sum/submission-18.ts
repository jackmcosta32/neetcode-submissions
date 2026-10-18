class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numMap = new Map();
        let j = 0;

        while (j < nums.length) {
            const numI = target - nums[j]

            if (numMap.has(numI)) {
                return [numMap.get(numI), j]
            }

            numMap.set(nums[j], j)
            j++
        }

        return []
    }
}
