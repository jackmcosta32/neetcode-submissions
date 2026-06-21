class Solution:
    def search(self, nums: List[int], target: int) -> int:
        i = 0
        j = len(nums) - 1

        while i <= j:
            mean = (i + j) // 2

            if target == nums[mean]:
                return mean
            elif target > nums[mean]:
                i = mean + 1
            else:
                j = mean - 1

        return -1