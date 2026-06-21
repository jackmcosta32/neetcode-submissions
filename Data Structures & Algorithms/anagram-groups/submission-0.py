class Solution:
    # abcdefghijklmnopqrstuvwxyz / 26 possible chars
    # index = ord(s) - ord('a') 0 - 25

    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        s_map = {}
        char_amount = 26
        
        for s in strs:
            l_count = [0 for i in range(char_amount)]

            for l in s:
                index = ord(l) - ord('a')

                l_count[index] += 1

            l_tuple = tuple(l_count)
            
            if l_tuple in s_map:
                s_map[l_tuple].append(s)
            else:
                s_map[l_tuple] = [s]

        return s_map.values()
            
