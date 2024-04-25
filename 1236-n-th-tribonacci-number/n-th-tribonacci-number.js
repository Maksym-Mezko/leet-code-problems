/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n <= 2) {
        return n ? 1 : 0;
    }
    
    let t1 = 0;
    let t2 = 1;
    let t3 = 1;
    let t4 = 0;
    for (let i = n - 2; i > 0; i--) {
        t4 = t3 + t2 + t1;
        t1 = t2;
        t2 = t3;
        t3 = t4;
    }

    return t4;
};