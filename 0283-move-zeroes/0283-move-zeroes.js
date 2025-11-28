/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let result = [];
    
    // Collect non-zero elements
    for (let num of nums) {
        if (num !== 0) result.push(num);
    }
    
    // Add zeroes at the end
    while (result.length < nums.length) {
        result.push(0);
    }
    
    // Copy back to nums
    for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i];
    }
};
