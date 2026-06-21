class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left = 0
        right = len(numbers) - 1
        
        while left < right:
            numbers_sum = numbers[left] + numbers[right]

            if numbers_sum == target:
                return [left + 1, right + 1]
            elif numbers_sum < target:
                left += 1
            else:
                right -= 1