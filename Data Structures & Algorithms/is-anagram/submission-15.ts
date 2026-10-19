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

        const sCount = new Map<string, number>()
        const tCount = new Map<string, number>()

        for (let i = 0; i < s.length; i++) {
            sCount.set(s[i], (sCount.get(s[i]) ?? 0) + 1)
            tCount.set(t[i], (tCount.get(t[i]) ?? 0) + 1)
        }

        for (const sChar of sCount.keys()) {
            if (sCount.get(sChar) !== tCount.get(sChar)) {
                return false
            }
        }

        return true
    }
}
