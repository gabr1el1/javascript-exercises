const palindromes = function (str) {
let palindrome;
let reversed;
let normalized = "";
Array.from(str).forEach(function(character){
    if(character.toUpperCase()!==character.toLowerCase()){
        normalized+=character;
    }
});
normalized = normalized.toLowerCase()
reversed = normalized.split("").reverse().join("");
if(reversed==normalized){
    return true;
}else{
    return false;
}
};
palindromes('Racecar!');
// Do not edit below this line
module.exports = palindromes;
