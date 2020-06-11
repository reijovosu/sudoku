import _ from 'lodash';

const Validate = (arr) => {

    let ikr = [],
        ikc = [],
        ikg = [];

    let s = 0;

    const addSum = (num) => {
        s += num;
    }

    // check rows
    for (let i = 0; i < 9; i++) {
        let checkRow = [];
        arr[i].forEach((val, k) => {
            if (val.length === 1) {
                if (typeof checkRow[val[0]] === "undefined") {
                    checkRow[val[0]] = [i, k].join(",");
                    addSum(val[0]);
                }
                else {
                    ikr.push([i, k].join(","));
                    if (ikr.indexOf(checkRow[val[0]]) < 0) {
                        ikr.push(checkRow[val[0]]);
                    }
                };
            }
        });

        arr[i].forEach((val, k) => {
            if (val.length > 1) {
                val.map(
                    (vv, kk) => (typeof checkRow[vv] !== "undefined") && ikr.push([i, k, kk].join(","))
                )
            }
        });
    }

    // Check columns
    for (let i = 0; i < 9; i++) {
        let checkCol = [];
        for (let j = 0; j < 9; j++) {
            if (arr[j][i].length === 1) {
                if (typeof checkCol[arr[j][i][0]] === "undefined") {
                    checkCol[arr[j][i][0]] = [j, i].join(",");
                }
                else {
                    ikc.push([j, i].join(","));
                    if (ikc.indexOf(checkCol[arr[j][i][0]]) < 0) {
                        ikc.push(checkCol[arr[j][i][0]]);
                    }
                };
            }
        }

        for (let j = 0; j < 9; j++) {
            if (arr[j][i].length > 1) {
                arr[j][i].forEach(
                    (v, k) => { if (typeof checkCol[v] !== "undefined") ikc.push([j, i, k].join(",")) }
                );
            }
        }
    }

    // Check grids
    let grid = [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]];

    for (let x = 0; x < 9; x = x + 3) {
        for (let y = 0; y < 9; y = y + 3) {
            let checkGrid = [];
            grid.forEach((k) => {
                if (arr[k[0] + x][k[1] + y].length === 1) {
                    if (typeof checkGrid[arr[k[0] + x][k[1] + y][0]] === "undefined") {
                        checkGrid[arr[k[0] + x][k[1] + y][0]] = [k[0] + x, k[1] + y].join(",");
                    }
                    else {
                        ikg.push([k[0] + x, k[1] + y].join(","));
                        if (ikg.indexOf(checkGrid[arr[k[0] + x][k[1] + y][0]]) < 0) {
                            ikg.push(checkGrid[arr[k[0] + x][k[1] + y][0]]);
                        }
                    };
                }
            });

            grid.forEach((k) => {
                if (arr[k[0] + x][k[1] + y].length > 1) {
                    arr[k[0] + x][k[1] + y].forEach(
                        (v, kk) => { if (typeof checkGrid[v] !== "undefined") ikg.push([k[0] + x, k[1] + y, kk].join(",")) }
                    );
                }
            });
        }
    }
    return [_.union(ikc, ikr, ikg), s];
}

export default Validate;