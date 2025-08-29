const fibonacci = function(place) {
if (place < 0) {return "OOPS"};
let current = 1;
let previous = 0;
let beforeCurrent;
for (let i = 0; i < place; i++){
    beforeCurrent = current;
    current = current + previous;
    previous = beforeCurrent;
}

return previous;
};

fibonacci(4)

// Do not edit below this line
module.exports = fibonacci;
