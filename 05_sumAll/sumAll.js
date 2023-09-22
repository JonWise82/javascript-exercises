const sumAll = function(nMin, nMax) {
    
    if (typeof nMin !== 'number' || typeof nMax !== 'number' || nMin < 0 || nMax < 0) {
        return "ERROR";
    }
    
    let total = 0;
    let sumArray = [nMin, nMax];
    
    sumArray.sort((a, b) => a - b);
    console.log(sumArray);

    for (let i = sumArray[0]; i<= sumArray[1]; i++)   {
        total += i;
    }
    
    console.log(total);
    return total;
};

//test call
const result = sumAll(3, 5);
console.log(sumAll);

// Do not edit below this line
module.exports = sumAll;
