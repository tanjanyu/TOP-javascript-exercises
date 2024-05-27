const palindromes = function (word) {
    let array = word.split("");
    array = array.filter((char) => (/^[0-9a-z]+$/i.test(char)));
    for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() !== array[array.length - 1 - i].toLowerCase()) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
