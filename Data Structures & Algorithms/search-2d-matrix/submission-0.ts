class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const rows = matrix.length
        const columns = matrix[0].length

        let left = 0
        let right = rows * columns - 1

        while (left <= right) {
            const middle = Math.floor((left + right) / 2)
            const currRow = Math.floor(middle / columns) 
            const currColumn = middle % columns
            const currValue = matrix[currRow][currColumn]
            
            if (currValue < target) {
                left = middle + 1
            } else if (currValue > target) {
                right = middle - 1
            } else {
                return true
            }
        }

        return false
    }
}
