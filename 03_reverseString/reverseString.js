const reverseString = function(string) {
    let splitString = string.split("");
    let reverseString = "";
    for(let i = splitString.length-1; i >= 0; i--){
        reverseString+=splitString[i];
    }
    return reverseString;
};
// Do not edit below this line
module.exports = reverseString;
