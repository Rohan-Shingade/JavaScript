const arrNumber = [1,2,8,9,8,2,5];
const duplicate = arrNumber.filter((ele, index, arr)=>arr.indexOf(ele)!==index);
console.log(duplicate);