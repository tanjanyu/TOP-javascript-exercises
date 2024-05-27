const fibonacci = function(number) {
    if (Number(number) === 0) {
        return 0;
    }
    if (Number(number) < 0) {
        return "OOPS";
    }
    let output = 1, prevNum = 1, secPrevNum = 0;
    for (let i = 1; i < Number(number); i++) {
        output = prevNum + secPrevNum;
        secPrevNum = prevNum;
        prevNum = output;
    }
    return output;
};


// Do not edit below this line
module.exports = fibonacci;
