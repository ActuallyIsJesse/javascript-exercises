const findTheOldest = function(input) {
    const oldest = input.sort((a,b) => {
        const inputA = !a.yearOfDeath ? (new Date().getFullYear() - a.yearOfBirth) : a.yearOfDeath - a.yearOfBirth;
        const inputB = !b.yearOfDeath ? (new Date().getFullYear() - b.yearOfBirth) : b.yearOfDeath - b.yearOfBirth;
        return inputA > inputB ? -1 : 1;
    });
    return oldest[0];
}

// Do not edit below this line
module.exports = findTheOldest;
