class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const grouppedAnagrams = new Map<string, string[]>()
        
        for (const str of strs) {
            const anagramGroupKey = str.split('').sort().join('')
            
            if (grouppedAnagrams.has(anagramGroupKey)) {
                const anagramGroup = grouppedAnagrams.get(anagramGroupKey)
                anagramGroup.push(str)
            } else {
                grouppedAnagrams.set(anagramGroupKey, [str])
            }
        }

        return Array.from(grouppedAnagrams.values())
    }
}
