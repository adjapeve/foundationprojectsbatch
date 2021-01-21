const sumAll = function(number1,number2) {
        let sum = 0;
        let minNum = (number1 < number2) ? number1 : number2;
        let maxNum = (number2 > number1) ? number2 : number1;
        if (minNum < 0 || maxNum < 0 || typeof minNum != 'number' || typeof maxNum != 'number')
            return "ERROR";
        else {
            for (let i = minNum; i <= maxNum; i++) {
                sum += i;
            }
            return sum;
        }

    }

module.exports = sumAll
