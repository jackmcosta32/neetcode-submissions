class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false

        const sCharCountMap = new Map<string, number>()

        for (const sChar of s) {
            const sCharCount = sCharCountMap.get(sChar) ?? 0
            sCharCountMap.set(sChar, sCharCount + 1)
        }

        for (const tChar of t) {
            const sCharCount = sCharCountMap.get(tChar)

            if (!sCharCount || sCharCount <= 0) return false
        
            sCharCountMap.set(tChar, sCharCount - 1)
        }

        return true
    }
}
