const palindromes = function (str) {
    str = str.split('').filter(item => (item !== "." && item !== "," && item !== " " && item !== "!")).map(item => item.toLowerCase());
    console.log(str);
    for (let i = 0; i < str.length; i++) {

        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
 
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
