class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const counter = new Map<number, number>()

        for (const num of nums) {
            counter.set(num, (counter.get(num) ?? 0) + 1)
        }

        const bucket: number[][] = Array.from(
            { length: nums.length + 1 },
            () => []
        )

        for (const [num, count] of counter.entries()) {
            bucket[count].push(num)
        }

        const mostFrequent = []

        for (let i = bucket.length; i > 0; i--) {
            if (bucket[i]) {
                mostFrequent.push(...bucket[i])

                if (bucket[i].length >= k) {
                    break
                }
            }
        }

        return mostFrequent.slice(0, k)
    }
}
