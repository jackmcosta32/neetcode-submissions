// O(n) time complexity
// O(1) space complexity

// nums are in range of 1 to n
// nums have n+1 values (one value is guarantee to be duplicated)

// 1,3,4,2,2 next
// 0,1,2,3,4 index
// s,-,-,f
// 0 -> 3 -> (2 -> 4 -> 2)
// s -> 3 -> (f -> 4 -> 2)
// 0 -> s -> (2 -> 4 -> f)
// 0 -> 3 -> (s -> f -> 2)
// 0 -> 3 -> (2 -> f -> 2)

// 1,2,3,2,2 next
// 0,1,2,3,4 index
// s,-,-,f
// 0 -> 1 -> (2 -> 3 -> 2)
// s -> 1 -> (f -> 3 -> 2)
// 0 -> s -> (2 -> 3 -> f)
// 0 -> 1 -> (s -> f -> 2)
// 0 -> 1 -> (2 -> sf -> 2)

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let slow = nums[0]
        let fast = nums[nums[0]]

        while (slow !== fast) {
            slow = nums[slow]
            fast = nums[nums[fast]]
        }

        let slow2 = 0

        while (slow !== slow2) {
            slow = nums[slow]
            slow2 = nums[slow2]
        }

        return slow
    }
}
