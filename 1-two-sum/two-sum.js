/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }

    for (let i = 0; i < nums.length; i++) {
        const a = nums[i];
        const b = target - a;
        const ii = map.get(b);
        if (ii && i !== ii) {
            return [i, ii]
        }
    }
};
