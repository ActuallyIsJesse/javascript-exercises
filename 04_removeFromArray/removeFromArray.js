const removeFromArray = function (...args) {
  const newArray = arguments[0];
  const elementsToRemove = args;
  elementsToRemove.shift();
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < (elementsToRemove.length); j++) {
      if (elementsToRemove[j] === newArray[i]) {
        newArray.splice(i, 1);
        i--;
      }
    }
  }
  return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
