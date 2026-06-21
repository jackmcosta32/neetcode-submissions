class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        word_length = len(s)

        if (word_length != len(t)):
            return False

        s_letter_map = {}
        t_letter_map = {}

        for index in range(word_length):
            curr_s_letter = s[index]
            curr_t_letter = t[index]
            
            if (curr_s_letter in s_letter_map):
                s_letter_map[curr_s_letter] += 1
            else:
                s_letter_map[curr_s_letter] = 1

            if (curr_t_letter in t_letter_map):
                t_letter_map[curr_t_letter] += 1
            else:
                t_letter_map[curr_t_letter] = 1
            
        for letter in s_letter_map.keys():
            if (letter not in t_letter_map):
                return False

            if (s_letter_map[letter] != t_letter_map[letter]):
                return False

        return True
