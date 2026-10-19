class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const group = new Map<string, string[]>()

        for (const str of strs) {
            const key = str.split('').sort().join('')

            if (group.has(key)) {
                group.get(key).push(str)
            } else {
                group.set(key, [str])
            }
        }

        return Array.from(group.values())
    }
}
