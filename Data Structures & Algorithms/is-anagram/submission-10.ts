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

        const sCounter = new Map<string, number>()
        const tCounter = new Map<string, number>()

        for (let i = 0; i < s.length; i++) {
            const sCount = sCounter.get(s[i]) ?? 0
            const tCount = tCounter.get(t[i]) ?? 0

            sCounter.set(s[i], sCount + 1)
            tCounter.set(t[i], tCount + 1)
        }

        for (const key of sCounter.keys()) {
            if (sCounter.get(key) !== tCounter.get(key)) {
                return false
            }
        }

        return true
    }
}
