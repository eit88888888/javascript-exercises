const sumAll = function(first, last) {
    if (first < 0 || last < 0 || !Number.isInteger(first) || !Number.isInteger(last)) {
        return "ERROR";
    }
    let equasion =  (last + first) / 2 * (last - first + 1);
    if (first > last) {
        return (last + first) / 2 * -(last - first - 1);
    }
    else {
        return (last + first) / 2 * (last - first + 1);
    }
};

console.log(sumAll(6, 1));

// Do not edit below this line
module.exports = sumAll;
