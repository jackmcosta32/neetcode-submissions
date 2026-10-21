class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const res: number[][] = []

        nums.sort((a, b) => a - b)

        for (let i = 0; i <= nums.length - 3; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            let j = i + 1
            let k = nums.length - 1

            while (j < k) {
                const sum = nums[i] + nums[j] + nums[k]

                if (sum < 0) {
                    j += 1
                } else if (sum > 0) { 
                    k -= 1
                } else {
                    res.push([nums[i], nums[j], nums[k]])

                    j += 1
                    k -= 1

                    while (j < k && nums[j] === nums[j - 1]) {
                        j++
                    }
                }
            }
        }

        return res
    }
}
