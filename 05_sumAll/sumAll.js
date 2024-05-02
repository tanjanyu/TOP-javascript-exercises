const sumAll = function(num1, num2) {
    // check if arguments are numbers else return error
    if ( (typeof(num1) !== "number") || (typeof(num2) !== "number") || (num1 < 0) || (num2 < 0)) {
        return "ERROR";
    }
    // use arithmetic progression sum formula
    let smallerNum = Math.min(num1, num2);
    let biggerNum = Math.max(num1, num2);
    let numOfTerms = biggerNum - smallerNum + 1;
    let sum = (numOfTerms) * ((smallerNum + biggerNum) / 2);
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
