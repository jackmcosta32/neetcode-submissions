class Solution {
    check(piles: number[], k: number): number { 
        const h = piles.reduce((acc, pile) => {
            return acc + Math.ceil(pile / k) 
        }, 0)

        return h
    }

    binarySearch(piles: number[], h: number): number {
        let left = 1
        let right = Math.max(...piles)
        let minK: number = undefined

        while (left <= right) {
            const middle = Math.floor((left + right) / 2)
            const guess = this.check(piles, middle)
 
            if (guess > h) {
                left = middle + 1 
            } else {
                right = middle - 1
                minK = middle
            }
        }

        return minK
    }

    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        return this.binarySearch(piles, h)
    }
}
