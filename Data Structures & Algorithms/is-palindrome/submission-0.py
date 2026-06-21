class Solution:
    def isPalindrome(self, s: str) -> bool:
        sub_s = re.sub(r'\W+', '', s).lower()

        for index in range(len(sub_s)):
            if sub_s[index] != sub_s[-index - 1]:
                return False

        return True

