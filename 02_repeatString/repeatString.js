const repeatString = function(string, num) {
    let concatinatedString = string;
    for (let i = 1; i < num; i++) {
        concatinatedString = concatinatedString + string;
    }
    return concatinatedString;
};

// Do not edit below this line
module.exports = repeatString;
