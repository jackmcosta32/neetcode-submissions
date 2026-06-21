class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        value_map = {}
        
        for value in nums:
            if value in value_map:
                return True
            else:
                value_map[value] = 1

        return False
