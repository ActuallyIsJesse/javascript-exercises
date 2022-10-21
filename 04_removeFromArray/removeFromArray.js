const removeFromArray = function(...args) {
    const newArray = arguments[0];
    for (i of newArray) {
        if (newArray[i] === arguments[1]) {
            newArray.splice(i, 1);
        }
    }
    return newArray;
  };

// Do not edit below this line
module.exports = removeFromArray;
