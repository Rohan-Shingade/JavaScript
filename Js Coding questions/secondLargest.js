const numArray = [4,5,7,9,3,6];
 
const largestValue = (arr) => {
    firstLargest = Math.max(...arr);
    index = arr.indexOf(firstLargest);
    arr.splice(index, 1);    //remove an element from that index value
    // return (firstLargest);

    secondLargest = Math.max(...arr);
    return (secondLargest);
}
console.log(largestValue(numArray));