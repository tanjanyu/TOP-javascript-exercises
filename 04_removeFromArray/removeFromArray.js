const removeFromArray = function(array) {
    let arrayLength = array.length;
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arrayLength; j++) {
            if (arguments[i] === array[j]) {
                // Removes the part of the array that corresponds to the argument
                array.splice(j, 1);
                j--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
