class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false

        const sCharMap = new Map<string, number>()
        const tCharMap = new Map<string, number>()

        for (let i = 0; i < s.length; i++) {
            const sCharCount = sCharMap.get(s[i]) ?? 0
            const tCharCount = tCharMap.get(t[i]) ?? 0

            sCharMap.set(s[i], sCharCount + 1)
            tCharMap.set(t[i], tCharCount + 1)
        }

        if (sCharMap.size !== tCharMap.size) return false

        for (const sChar of sCharMap.keys()) {
            if (sCharMap.get(sChar) !== tCharMap.get(sChar)) {
                return false
            } 
        }

        console.log(sCharMap, tCharMap)

        return true
    }
}
