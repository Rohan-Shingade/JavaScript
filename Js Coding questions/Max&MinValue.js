const arrNumber = [1,9,87,65,67];

const maxFunction = (arr) => {
    return arr.reduce(function(pre, curr){
        return pre > curr ? pre : curr;
    });
}
console.log("Maximum Number in giver array is: ",maxFunction(arrNumber));

const minFunction = (arr2) =>{
    return arr2.reduce(function(pre, curr){
        return pre < curr ? pre : curr;
    })

}
console.log("Minimum Number in giver array is: ",minFunction(arrNumber));