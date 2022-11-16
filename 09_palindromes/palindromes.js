const palindromes = function (input) {
let str = input.toLowerCase();
str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
str = str.replace(/\s/g, '');
let reversedString = "";
for (i = 0; i < str.length; i++) {
    reversedString = str.charAt(i) + reversedString;
  }
 console.log({str});
 console.log({reversedString});
return reversedString === str;
};

// Do not edit below this line
module.exports = palindromes;
