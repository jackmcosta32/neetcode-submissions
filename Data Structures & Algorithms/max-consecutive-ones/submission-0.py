class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        maxCount = 0
        currCount = 0

        for num in nums:
            if num == 1:
                currCount += 1
            else:
                if maxCount < currCount:
                    maxCount = currCount
                
                currCount = 0

        if maxCount < currCount:
            maxCount = currCount

        return maxCount