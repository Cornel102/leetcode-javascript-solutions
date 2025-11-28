/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(" ");
    if (words.length !== pattern.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        if (pattern.indexOf(pattern[i]) !== words.indexOf(words[i])) {
            return false;
        }
    }
    return true;
};
