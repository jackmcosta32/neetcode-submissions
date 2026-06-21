class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        num_count = Counter(nums)
        most_common_tuple = num_count.most_common(k)
        most_common_list = [key for (key, _) in most_common_tuple]

        return most_common_list