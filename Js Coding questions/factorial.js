/* 

The factorial of a Number is the product of all number from 1 to that number

for eg: Factorial of 5 if equal to 5! = 1 * 2 * 3 * 4 * 5 = 120

factorial of negative number is not possible

*/

const inputNum = prompt("please enter your number: ");
var fact = 1;

if (inputNum < 0) {
  console.log("Number is Negative");
} else {
  for (let i=1; i<inputNum; i++) {
    fact *= i ;
  }
  console.log(`factorial of ${inputNum} is : `, fact);
}

//prompt will not work in terminal so for this check index.html