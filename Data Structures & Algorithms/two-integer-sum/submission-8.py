class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_dict = {}
        
        for i in range(len(nums)):
            a = nums[i]
            b = target - a

            if b in num_dict:
                return [num_dict[b], i]

            num_dict[a] = i

        return None
