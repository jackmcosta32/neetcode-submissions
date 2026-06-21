class Solution:
    # a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z
    # 25 chars
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        char_amount = ord('z') - ord('a')
        anagram_dict = {}

        for s in strs:
            s_count = [0 for i in range(char_amount)]

            for c in s:
                i = ord(c) - ord('a')
                s_count[i] += 1
        
            s_count_tuple = tuple(s_count)

            if s_count_tuple in anagram_dict:
                anagram_dict[s_count_tuple].append(s)
            else:
                anagram_dict[s_count_tuple] = [s]

        return anagram_dict.values()
            

            