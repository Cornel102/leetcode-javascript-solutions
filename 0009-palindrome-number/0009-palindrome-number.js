/**
 * @param {121} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let result = 0;
    let original = x;

    while(x > 0) {
        const rem = x % 10;
        result = result * 10 + rem;
        x = Math.floor(x / 10)
    }

    return result === original;
};