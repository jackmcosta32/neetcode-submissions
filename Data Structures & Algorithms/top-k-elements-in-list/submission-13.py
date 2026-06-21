class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        n_dict = {}
        
        for n in nums:
            n_dict[n] = n_dict.get(n, 0) + 1
            
        arr = list(n_dict.items())
        arr.sort(key=lambda val: val[1], reverse=True)
        
        output = list(map(lambda val: val[0], arr))
        
        return output[:k]
        