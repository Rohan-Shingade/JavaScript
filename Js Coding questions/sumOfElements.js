const arrNum = [1,9,6,4];

const sumofNumbers = (arr) => {
  return arr.reduce((pre, curr) => {
    return pre + curr ;
  })
}

console.log("Sum of arry elements is: ",sumofNumbers(arrNum));