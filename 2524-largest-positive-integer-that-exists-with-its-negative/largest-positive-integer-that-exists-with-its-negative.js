/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i])
    }

    let max = -1;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (set.has(Math.abs(num)) && set.has(-Math.abs(num)) && num > max) {
            max = num;
        }
    }

    return max;
};