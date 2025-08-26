const removeFromArray = function(array, r1, r2, r3, r4) {
    const test = [r1, r2, r3, r4];
    for (let i = array.length - 1; i >= 0; i--) {
            if (test.includes(array[i])) {
                array.splice(i, 1);
            }
        
    }
    return array;
};

let array = [1, 2, 3, 4];
removeFromArray(array, 3, 6, 1);
console.log(array);

// Do not edit below this line
module.exports = removeFromArray;
