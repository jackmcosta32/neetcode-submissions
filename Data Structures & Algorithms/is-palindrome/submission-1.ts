class Solution {
    isAlphaNum(c: string): boolean {
        return (
            (c >= 'a' && c <= 'z') ||
            (c >= 'A' && c <= 'Z') || 
            (c >= '0' && c <= '9') 
        )
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let i = 0
        let j = s.length - 1

        while (i <= j) {
            if (!this.isAlphaNum(s[i])) {
                i += 1
                continue
            }

            if (!this.isAlphaNum(s[j])) {
                j -= 1
                continue
            }

            if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                return false
            }

            i += 1
            j -= 1
        }

        return true
    }
}
