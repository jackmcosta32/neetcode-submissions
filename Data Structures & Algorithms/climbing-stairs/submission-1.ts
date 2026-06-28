class Solution {
    private cache: Record<number, number> = {}

    /**
     * @param {number} n
     * @return {number}
     */
    private countSolutions(n) {
        if (this.cache[n]) return this.cache[n]
        if (n <= 0) return 0
        if (n === 1) return 1
        if (n === 2) return 2

        const solutions = this.countSolutions(n-1) + this.countSolutions(n-2)

        if (!this.cache[n]) {
            this.cache[n] = solutions
        }

        return solutions
    }

    climbStairs(n: number): number {
        return this.countSolutions(n)
    }
}
