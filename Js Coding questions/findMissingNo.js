const numArray = [1,3,2,6,4,5,7,9];
// console.log(numArray.sort());
const missingArray = [];

const missingValue = (arr) => {
    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);

    for (let i=minValue; i<maxValue; i++) {
        if (arr.indexOf(i)<0) {
            missingArray.push(i);
        }
    }
    return (missingArray);
}

console.log("Missing values are: ",missingValue(numArray));