const repeatString = function(entryText,numberTimes) {
    let resultText="";
    if(numberTimes<0)
    resultText="ERROR";
    for(let i=0;i<numberTimes;i++){
        resultText+=entryText;
    }
   return resultText;
}

module.exports = repeatString
