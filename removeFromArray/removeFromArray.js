const removeFromArray = function (inputArray) {
    let index = "";
    let args = Array.from(arguments);
    let arrayOrigLength = inputArray.length;
    //iterate targets from arguments
    for (let i = 1; i <= args.length; i++) {
        //iterates input string
        for (let j = 0; j <= arrayOrigLength; j++) {
            index = inputArray.indexOf(args[i]);
            if (index >= 0)
                inputArray.splice(index, 1);
        }
    }
    return inputArray;
}

module.exports = removeFromArray
