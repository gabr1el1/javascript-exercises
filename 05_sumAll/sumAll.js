const sumAll = function(n1, n2) {
    if(typeof n1!=='number' || typeof n2!=='number' ){
        return 'ERROR'
    }
    let min = Math.min(n1,n2);
    let max = Math.max(n1,n2);
    let sum = 0;
    if(min < 0) return 'ERROR';
    for(let i = min;i <= max;i++){
        sum+=i;
    }
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
