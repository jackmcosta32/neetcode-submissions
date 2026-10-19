class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false
        }

        const charCount = new Map<string, number>()

        for (let i = 0; i < s.length; i++) {
            charCount.set(s[i], (charCount.get(s[i]) ?? 0) + 1)
            charCount.set(t[i], (charCount.get(t[i]) ?? 0) - 1)
        }

        for (const char of charCount.keys()) {
            if (charCount.get(char) !== 0) {
                return false
            }
        }

        return true
    }
}
