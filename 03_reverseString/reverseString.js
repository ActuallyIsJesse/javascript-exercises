const reverseString = function(string) {
    let reversedString = "";
    for (i = 0; i < string.length; i++) {
      reversedString = string.charAt(i) + reversedString;
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
