# g_index = (row // g_size) * g_size + (column // g_size)  

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        grid_size = 3
        board_size = 9

        grids_map = [{} for i in range(board_size)]
        rows_map = [{} for i in range(board_size)]
        columns_map = [{} for i in range(board_size)]

        for row in range(board_size):
            for column in range(board_size):
                cell_value = board[row][column]

                if cell_value == '.':
                    continue
                
                grid = (row // grid_size) * grid_size + (column // grid_size) 

                if (
                    cell_value in grids_map[grid]
                    or cell_value in rows_map[row]
                    or cell_value in columns_map[column]
                ):
                    return False

                rows_map[row][cell_value] = 1
                grids_map[grid][cell_value] = 1
                columns_map[column][cell_value] = 1

        return True
