const reverseString = function (inputString) {
    let stringToArray = inputString.split("");
    let result = "";
    for (let i = stringToArray.length - 1; i >= 0; i--) {
        result += stringToArray[i];
    }
    return result;
}

module.exports = reverseString
