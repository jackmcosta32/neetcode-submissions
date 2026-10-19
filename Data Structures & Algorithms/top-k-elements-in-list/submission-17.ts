class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numCounter = new Map<number, number>()

        for (const num of nums) {
            numCounter.set(num, (numCounter.get(num) ?? 0) + 1)
        }

        const bucket: number[][] = Array.from({ length: nums.length + 1 })

        for (const [num, count] of numCounter.entries()) {
            if (bucket[count]) {
                bucket[count].push(num)
            } else {
                bucket[count] = [num]
            }
        }

        const topKFrequent = []

        for (let i = nums.length; i > 0; i--) {
            if (bucket[i]) {
                topKFrequent.push(...bucket[i])

                if (bucket[i].length >= k) {
                    break
                }
            }
        }

        return topKFrequent.slice(0, k)
    }
}
