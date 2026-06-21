class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        num_count = Counter(nums)
        most_common = num_count.most_common(k)
        most_common_values = [value for (value, _) in most_common]

        print(most_common)

        return most_common_values