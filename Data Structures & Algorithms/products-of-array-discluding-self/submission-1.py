# [1,2,4,6]
# [1,1,2,8]
# [48,24,6,1]
# [48,24,12,8]

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        left = [1 for i in range(len(nums))]
        output = [1 for i in range(len(nums))]

        for i in range(1, len(nums), 1):
            output[i] = nums[i - 1] * output[i - 1]

        for i in range(len(nums) - 2, -1 , -1):
            left[i] = nums[i + 1] * left[i + 1]
            output[i] *= left[i]

        return output