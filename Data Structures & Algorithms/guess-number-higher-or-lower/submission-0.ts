/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    binarySearch(n: number) {
        let left = 1
        let right = n

        while (left <= right) {
            const middle = Math.floor((left+right) / 2)
            const currentGuessResult = guess(middle)

            if (currentGuessResult === -1) {
                right = middle - 1
            } else if (currentGuessResult === 1) {
                left = middle + 1
            } else {
                return middle
            }
        }

        return -1
    }
    
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n: number): number {
        return this.binarySearch(n)
    }
}
