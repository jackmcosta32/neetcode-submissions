class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        max_seq_len = 0
        num_set = set(nums)

        for num in num_set:
            prev_num = num - 1

            if prev_num in num_set:
                continue

            curr_seq_len = 1
            next_num = num + 1

            while next_num in num_set:
                next_num += 1
                curr_seq_len += 1

            if curr_seq_len < max_seq_len:
                continue
            
            max_seq_len = curr_seq_len

        return max_seq_len