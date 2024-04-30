const reverseString = function(string) {
    let stringArray = [];
    // store the numbers in an array so that can be reveresed into a string later
    stringLength = string.length;
    for (let i = 0; i < stringLength; i++) {
        stringArray.push(string.charAt(i));
    }

    let reversedResult = "";
    for (let i = 0; i < stringLength; i++) {
        reversedResult = reversedResult.concat(stringArray[ (stringLength - 1) - i]);
    }
    return reversedResult;
};

reverseString("Hello");

// Do not edit below this line
module.exports = reverseString;
