class Solution:
     def productExceptSelf(self, nums: List[int]) -> List[int]:
        len_nums = len(nums)
        left = [1] * len_nums
        right = [1] * len_nums
        output = [1] * len_nums

        for index in range(len_nums):
            left_index = index - 1
            right_index = len_nums - index

            if left_index < 0:
                left[index] = 1
            else:
                left[index] = left[left_index] * nums[left_index]

            if right_index >= len_nums:
                right[len_nums - 1 - index] = 1
            else:
                right[len_nums - 1 - index] = right[right_index] * nums[right_index]

        for index in range(len_nums):
            output[index] = left[index] * right[index]

        return output
