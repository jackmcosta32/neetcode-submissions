# num_i + num_j = target
# num_j = target - num_i

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_i_map = {}

        for j, num_j in enumerate(nums):
            num_i = target - num_j

            if num_i in num_i_map:
                return [num_i_map[num_i], j]

            num_i_map[num_j] = j

        return []

