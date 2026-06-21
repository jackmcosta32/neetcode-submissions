class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        s_counter = Counter()
        t_counter = Counter()
        
        if len(s) != len(t):
            return False
        
        for i in range(len(s)):
            s_counter[s[i]] += 1
            t_counter[t[i]] += 1

        for letter in s_counter:
            if s_counter[letter] != t_counter[letter]:
                return False

        return True