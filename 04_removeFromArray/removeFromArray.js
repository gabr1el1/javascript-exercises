const removeFromArray = function() {
    let newArray = arguments[0];
    let removePosition;
    //console.log(search);
    for(let i = 1;i < arguments.length;i++){
        removePosition = newArray.indexOf(arguments[i]);
        if(removePosition!=-1){
            newArray.splice(removePosition,1);
        }
    }
    return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
