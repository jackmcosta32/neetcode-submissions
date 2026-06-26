class MinStack:
    def __init__(self):
        self._stack: List[int] = []
        self._min_stack: List[int] = []

    def push(self, val: int) -> None: 
        self._stack.append(val)
        current_min = self._min_stack[-1] if self._min_stack else val
        new_min = min(val, current_min)
        self._min_stack.append(new_min)

    def pop(self) -> None:
        self._stack.pop()
        self._min_stack.pop()

    def top(self) -> int:
        return self._stack[-1]

    def getMin(self) -> int:
        return self._min_stack[-1]