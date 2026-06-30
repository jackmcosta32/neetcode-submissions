/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    private merge(pairs: Pair[], start: number, middle: number, end: number) {
        const left = pairs.slice(start, middle + 1)
        const right = pairs.slice(middle + 1, end + 1)

        let i = 0
        let j = 0
        let k = start

        // Sort sub arrays and insert them into the original array
        while (i < left.length && j < right.length) {
            if (left[i].key <= right[j].key) {
                pairs[k] = left[i]
                i++
            } else {
                pairs[k] = right[j]
                j++
            }

            k++
        }

        // Upfill the remaining values into the original array
        // Only one (left or right) will be upfilled to the 
        // original array
        while (i < left.length) {
            pairs[k] = left[i]
            i++
            k++
        }

        while (j < right.length) {
            pairs[k] = right[j]
            j++
            k++
        }
    }

    private sort(pairs: Pair[], start: number, end: number) {
        const size = end - start + 1 // 0 index

        if (size <= 1) {
            return pairs
        }
        
        const middle = Math.floor((start + end) / 2)

        this.sort(pairs, start, middle)
        this.sort(pairs, middle + 1, end)
        this.merge(pairs, start, middle, end)

        return pairs
    }

    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs: Pair[]): Pair[] {
        return this.sort(pairs, 0, pairs.length - 1)
    }
}
