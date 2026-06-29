class Solution {
    private cache: Map<number, number> = new Map()

    /**
     * @param {number} n
     * @return {number}
     */
    private countSolutions(n) {
        if (n <= 0) return 0
        if (n === 1) return 1
        if (n === 2) return 2

        if (this.cache.has(n)) {
            return this.cache.get(n)
        }

        const solutions = this.countSolutions(n-1) + this.countSolutions(n-2)
        this.cache.set(n, solutions)

        return solutions
    }

    climbStairs(n: number): number {
        return this.countSolutions(n)
    }
}
