class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        size = len(nums) * 2
        concated_nums = [0] * size
        concated_nums[0:len(nums)] = nums
        concated_nums[len(nums):] = nums

        return concated_nums
