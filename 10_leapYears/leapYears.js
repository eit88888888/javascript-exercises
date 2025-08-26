const leapYears = function(isLeapYear) {
    if (isLeapYear % 4 == 0 && isLeapYear % 100 !== 0 || isLeapYear % 400 == 0) {
        return true;
        
    } else {
        return false;
    }
};
console.log(leapYears(400));
// Do not edit below this line
module.exports = leapYears;
