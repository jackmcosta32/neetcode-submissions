class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const charSet = new Set<string>()
        let maxLength = 0
        let i = 0
        let j = 0

        while (j < s.length) {
            while (charSet.has(s[j])) {
                charSet.delete(s[i])
                i += 1
            }

            charSet.add(s[j])
            maxLength = Math.max(maxLength, j - i + 1)
            j += 1
        }

        return maxLength
    }
}