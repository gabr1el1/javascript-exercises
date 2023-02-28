const fibonacci = function(nth) {
    if(nth<1){
        return "OOPS";
    }
    if(nth==1){
        return 1;
    }else if(nth==2){
        return 1
    }else{
        //console.log(`fibonacci(nth-1)${nth-1} fibonacci(nth-1)${nth-2}`)
        return fibonacci(nth-1) + fibonacci(nth-2);
    }
};
fibonacci(3);
/*
1
2
3
5
8
12


*/

// Do not edit below this line
module.exports = fibonacci;
