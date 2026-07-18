
// 1,2,3
// 1,1,2
// 6,3,1
// 6,3,2

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const output: number[] = new Array(nums.length).fill(1)
        const prefix: number[] = new Array(nums.length).fill(1)
        const suffix: number[] = new Array(nums.length).fill(1)

        // prefix
        for (let i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1]
        }

        // postfix
        for (let i = nums.length - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i + 1]
        }

        for (let i = 0; i < nums.length; i++) {
            output[i] = prefix[i] * suffix[i]
        }

        console.log(output)

        return output
    }
}
