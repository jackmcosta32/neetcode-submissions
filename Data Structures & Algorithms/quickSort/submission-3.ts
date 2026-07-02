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
    private sort(arr: Pair[], start: number, end: number) {
        if (end - start + 1 <= 1) {
            return arr
        }

        const pivot = arr[end]
        let left = start

        for (let i = start; i < end; i++) {
            if (arr[i].key < pivot.key) {
                let temp = arr[left]
                arr[left] = arr[i]
                arr[i] = temp
                left++
            }
        }

        arr[end] = arr[left]
        arr[left] = pivot

        this.sort(arr, start, left - 1)
        this.sort(arr, left + 1, end)

        return arr
    }
    
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    quickSort(pairs: Pair[]): Pair[] {
        return this.sort(pairs, 0, pairs.length - 1)
    }
}