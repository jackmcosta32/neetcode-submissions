class Solution:
    # a + b = target
    # b = target - a

    def twoSum(self, nums: List[int], target: int) -> List[int]:        
        b_map = {}

        for index, a in enumerate(nums):
            b = target - a
            
            if b in b_map:
                return [b_map[b], index]

            b_map[a] = index

        return []