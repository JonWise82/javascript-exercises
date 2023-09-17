const reverseString = function(string) {
    let stringArray = Array.from(string);
    stringArray.reverse();
    let reversedString = stringArray.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
