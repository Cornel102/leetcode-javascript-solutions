/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];

    const prev = generate(numRows - 1);
    const lastRow = prev[prev.length - 1];
    const newRow = [1];

    for (let i = 1; i < lastRow.length; i++) {
        newRow.push(lastRow[i - 1] + lastRow[i]);
    }
    newRow.push(1);

    prev.push(newRow);
    return prev;
};
