/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    if (columnNumber === 0) return "";
    columnNumber--;
    return convertToTitle(Math.floor(columnNumber / 26)) + String.fromCharCode(columnNumber % 26 + 65);
};
