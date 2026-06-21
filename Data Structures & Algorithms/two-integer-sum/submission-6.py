class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_map = {}
    
        for i, num in enumerate(nums):
            num_map[num] = i

        print(num_map)

        for i, num_i in enumerate(nums):
            num_j = target - num_i

            if num_j in num_map:
                j = num_map[num_j]

                if i == j:
                    continue

                return [i, j]

        return []