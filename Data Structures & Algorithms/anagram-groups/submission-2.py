class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        str_dicts = []
        output = []

        for s in strs:
            s_dict = {}

            for l in s:
                s_dict[l] = s_dict.get(l, 0) + 1

            if s_dict in str_dicts:
                output[str_dicts.index(s_dict)].append(s)
            else:
                output.append([s])
                str_dicts.append(s_dict)

        return output