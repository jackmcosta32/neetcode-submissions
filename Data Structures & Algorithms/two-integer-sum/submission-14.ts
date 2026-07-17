class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsByIndex = new Map<number, number>()
        
        for (let i = 0; i < nums.length; i++) {
          const numCounterPart = target - nums[i]

          if (numsByIndex.has(numCounterPart)) {
            return [numsByIndex.get(numCounterPart), i]
          }

          numsByIndex.set(nums[i], i) 
        }

        return []
    }
}
