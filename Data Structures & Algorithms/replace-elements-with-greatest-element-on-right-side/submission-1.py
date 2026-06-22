class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        lenArr = len(arr)
        
        if lenArr == 0:
            return []

        if lenArr == 1:
            return [-1]

        maxValue = arr[lenArr - 1]
        arr[lenArr - 1] = -1

        for i in range(lenArr - 2, -1, -1):
            currValue = arr[i]
            arr[i] = maxValue

            if currValue > maxValue:
                maxValue = currValue

        return arr

