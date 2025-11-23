/**
 * Hash Map Counting
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const freq = new Map();
    const result = [];
    const threshold = Math.floor(nums.length / 3);

    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for (let [num, count] of freq.entries()) {
        if (count > threshold) result.push(num);
    }

    return result;
};
