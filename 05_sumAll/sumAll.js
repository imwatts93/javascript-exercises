const sumAll = function(num1, num2) {
    if (num1 > num2) {
        const temp = num1
        num1 = num2
        num2 = temp
    }


    let finalSum = 0
    for (i = num1; i <= num2; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
