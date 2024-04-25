let stringToRepeat = ""

let numOfTimes = 0

let i = 0

const repeatString = function(stringToRepeat, numOfTimes) {
    let repeatedString = ''
    if (numOfTimes < 0) {
        return 'ERROR'
    }

    else if (numOfTimes === 1) {
        return stringToRepeat
    }

    else
    for (let i =0; i < numOfTimes; i++) {
    repeatedString += stringToRepeat;
    } 
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
