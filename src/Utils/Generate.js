import _ from 'lodash';

const Generate = (difficulty = 0) => {

    let sudoku = [
        [[4], [6], [5], [2], [3], [1], [7], [8], [9]],
        [[8], [1], [2], [7], [6], [9], [3], [5], [4]],
        [[7], [9], [3], [5], [8], [4], [1], [6], [2]],
        [[5], [3], [9], [8], [2], [7], [6], [4], [1]],
        [[6], [2], [4], [1], [5], [3], [9], [7], [8]],
        [[1], [7], [8], [4], [9], [6], [2], [3], [5]],
        [[3], [8], [6], [9], [4], [2], [5], [1], [7]],
        [[9], [4], [7], [3], [1], [5], [8], [2], [6]],
        [[2], [5], [1], [6], [7], [8], [4], [9], [3]]
    ];

    const transposeRow = function (row1, row2) {
        if (row1 !== row2) {
            let temp = sudoku[row1];
            sudoku[row1] = sudoku[row2]
            sudoku[row2] = temp;
        }
    }

    const transposeColumn = function (col1, col2) {
        if (col1 !== col2) {
            let temp;
            for (let i = 0; i < 9; i++) {
                temp = sudoku[i][col1];
                sudoku[i][col1] = sudoku[i][col2];
                sudoku[i][col2] = temp;
            }
        }
    }

    const transposeRowBig = function (bigRow1, bigRow2) {
        for (let i = 0; i < 3; i++) {
            transposeRow(bigRow1 * 3 + i, bigRow2 * 3 + i);
        }
    }

    const transposeColumnBig = function (bigCol1, bigCol2) {
        for (let i = 0; i < 3; i++) {
            transposeColumn(bigCol1 * 3 + i, bigCol2 * 3 + i);
        }
    }

    const removeElements = function (count) {
        let removeCounter = 0;
        let rndX, rndY;
        while (removeCounter < count) {
            rndX = _.random(0, 8);
            rndY = _.random(0, 8);
            if (sudoku[rndX][rndY]) {
                sudoku[rndX][rndY] = [];
                removeCounter++;
            }
        }
    }

    for (let i = 0; i < _.random(1, 9); i++) {
        transposeRowBig(_.random(0, 2), _.random(0, 2));
    }

    for (let i = 0; i < _.random(1, 9); i++) {
        transposeColumnBig(_.random(0, 2), _.random(0, 2));
    }

    for (let i = 0; i < _.random(3, 27); i++) {
        let multiplier = _.random(0, 2);
        transposeRow(_.random(0, 2) + 3 * multiplier, _.random(0, 2) + 3 * multiplier);
    }

    for (let i = 0; i < _.random(3, 27); i++) {
        let multiplier = _.random(0, 2);
        transposeColumn(_.random(0, 2) + 3 * multiplier, _.random(0, 2) + 3 * multiplier);
    }

    removeElements(difficulty);
    return sudoku;
}

export default Generate;