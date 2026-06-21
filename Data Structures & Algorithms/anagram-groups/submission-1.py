class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        s_map = {}
        c_amount = 26

        for s in strs:
            c_count = [0 for i in range(c_amount)]

            for c in s:
                i = ord(c) - ord('a')

                c_count[i] += 1

            c_tuple = tuple(c_count)

            if c_tuple in s_map:
                s_map[c_tuple].append(s)
            else:
                s_map[c_tuple] = [s]

        return s_map.values()