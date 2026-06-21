class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        len_s = len(s)
        
        if len_s != len(t):
            return False

        s_dict = {}
        t_dict = {}

        for i in range(len_s):
            s_letter = s[i]
            t_letter = t[i]

            if s_letter in s_dict:
                s_dict[s_letter] += 1
            else:
                s_dict[s_letter] = 1

            if t_letter in t_dict:
                t_dict[t_letter] += 1
            else:
                t_dict[t_letter] = 1
                
        len_s_dict = len(s_dict)

        if len_s_dict != len(t_dict):
            return False

        for letter in s_dict:
            s_letter_count = s_dict[letter]

            if letter not in t_dict:
                return False 

            t_letter_count = t_dict[letter]

            if s_letter_count != t_letter_count:
                return False

        return True