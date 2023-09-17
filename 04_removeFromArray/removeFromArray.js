const removeFromArray = function(...args) {
    let inputArray = args[0];
    console.log(`Array received is ${inputArray}`);
    
    let removeArray = [];
    for (let i = 1; i < args.length; i++) {
        removeArray.push(args[i]);
      }

    //create a set object from removeArray to get unique remove values
    const removeSet = new Set(removeArray);    
    console.log(`Elements to remove are ${removeSet}`);
    
    const result = inputArray.filter(item => !removeSet.has(item));
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
