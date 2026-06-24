class Solution:
    def calPoints(self, operations: List[str]) -> int:
        scores = []
        final_score = 0

        for i, operation in enumerate(operations):            
            match operation:
                case '+':
                    new_score = int(scores[-1]) + int(scores[-2])
                    scores.append(new_score)
                    final_score += new_score
                case 'D':
                    new_score = int(scores[-1]) * 2
                    scores.append(new_score)
                    final_score += new_score
                case 'C':
                    decreased_score = scores.pop()
                    final_score -= decreased_score
                case _:
                    new_score = int(operation)
                    scores.append(new_score)
                    final_score += new_score

        return final_score