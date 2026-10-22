class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let i = 0
        let j = heights.length - 1
        let max = 0

        while (i < j) {
            const width = j - i
            const height = Math.min(heights[j], heights[i])
            const curr = width * height
            
            max = Math.max(max, curr)

            if (heights[i] > heights[j]) { 
                j -= 1
            } else {
                i += 1
            }
        }

        return max
    }
}
