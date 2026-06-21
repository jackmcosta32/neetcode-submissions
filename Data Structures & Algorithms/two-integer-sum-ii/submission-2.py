class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left = 0
        right = len(numbers) - 1

        while left < right:
            sum_num = numbers[left] + numbers[right]

            if sum_num == target:
                return [left + 1, right + 1]
            elif sum_num < target:
                left += 1
            else:
                right -= 1

        return []