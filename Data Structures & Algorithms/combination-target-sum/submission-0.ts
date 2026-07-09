class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const res: number[][] = []
        const subset: number[] = []

        const dfs = (i: number, remaining: number) => {
            if (remaining < 0 || i >= nums.length) {
                return
            }

            if (remaining === 0) {
                res.push(Array.from(subset))
                return
            }

            subset.push(nums[i])
            dfs(i, remaining - nums[i])

            subset.pop()
            dfs(i + 1, remaining)
        }

        dfs(0, target)

        return res
    }
}
