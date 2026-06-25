class Solution:
    def isValid(self, s: str) -> bool:
        brackets = []

        if len(s) <= 1 or len(s) % 2 != 0:
            return False

        for i in range(len(s)):
            if s[i] in ['[', '{', '(']:
                brackets.append(s[i])
            elif len(brackets) == 0:
                return False
            elif s[i] == ']' and brackets[-1] != '[':
                return False
            elif s[i] == '}' and brackets[-1] != '{':
                return False
            elif s[i] == ')' and brackets[-1] != '(':
                return False
            else:
                brackets.pop()

        return len(brackets) == 0