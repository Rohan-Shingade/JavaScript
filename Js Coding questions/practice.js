// 1
// let a =[];
// let b =[];
// console.log(a==b); //false //checks value
// console.log(a===b); //false //checks type of value

//2
// let a =[];
// let b = a;
// console.log(a==b); //true
// console.log(a===b); //true

//3
// let a =[20];
// let b =['20'];
// console.log(a[0] == b[0]);
// console.log(a[0] === b[0]);

//4
// let z = [1,2,3,4];
// let a = {name : "Anil"};
// console.log(...z); //destructuring

//5
// console.log(typeof NaN); //Not a Number - special type of number // "subscribe"/ 2 | output: NaN = strings (Non neumeric values) cannot be divided by any number

//6
// let data = 10 - -10;
// console.log(data);

// 7
// const set = new Set([1, 1, 2, 3, 4]);
// console.log(set);

// 8
// let data = { name: "Anil" };
// console.log(delete data.name);

// 8
// let data = { name: "Anil" };
// console.log(delete data);

// 9
// const data = ["peter", "anil", "sam"];
// const [y] = data;
// console.log(y);

//10
// const data = ["peter", "anil", "sam"];
// const [,y] = data; // to get directly second element from data, put a comma before element in const [y]
// console.log(y);

//11
/* const data = { name: "anil", age: 29, skill: "js" };
// console.log(name);
// how to get property without . operator ?

//output:
const { name } = data;
console.log(name);

const { age } = data;
console.log(age);
 */

//12
/* let data = { name:"rohan", age: 27, skill: "js"};
let info = { city: "pune", mail: "rohan@test.com"};
// Q. How to merge 2 objects ?

//output:
data = {...data, ...info};
console.log(data); */

//13
// let data = { name:"rohan", age: 27, skill: "js"};
// let info = { city: "pune"};
// data = {data, ...info};
// console.log(data);

// output:
// { data: { name: 'rohan', age: 27, skill: 'js' }, city: 'pune' }  // data will get printed as it is bcz we've not destructured it

// 14
/* let data = { name:"rohan", age: 27, skill: "js"};
let info = { city: "pune", skill: "Node"}; // this skill property will get printed over previous skill along with other properties
data = {...data, ...info};
console.log(data);

output:
// { name: 'rohan', age: 27, skill: 'Node', city: 'pune' }
 */

//15
/* const name = "Anil";
console.log(name());
//output: error: name is not a function. */

// 16
/* const result = false || {} || null;
console.log(result); 

//output:
{} // whenever we use || (OR) operator, it will return first positive/true value */

// 17
/* const result = false || null;
console.log(result); 
//op:
null // */

/* const result2 = false || null || ''; //quotes are not considered positive values here
console.log(result2); 
//op:
null //if OR operator does not find any positive value it will return last value as an output */

// 19
/* const result = [] || 0 || true;
console.log(result); 

// output
 [] //same as object above, it will also considered as positive value
 */

// 20
/* console.log(Promise.resolve(5));

// op
// promise {<fullfilled>: 5} */

// 21
// console.log("💖" === "💖");
// op: true - type is same

// 22
// JSON.parse();
/* 

a) Parses json t js values
b) parses js objects to json
3) parses any js value to json
4) parses json to js object only

op: a

*/

// 23

//Let has block level scope

/* let name = "sidhu";

function getName() {
    console.log(name);
    let name = "Anil";
}
getName(); */

// op: Error: cannot access name before initialization (inside scope)

// 24
// let name = "sidhu";

// function getName() {
//     console.log(name);
// }
// getName();

// op: sidhu

// 25
// console.log(`${((x) => x)("I Love")} to program`);
//op: I Love to program

// 26
// function sumValues(x,y,z) {
//     return x + y + z;
// }

// A: sumValues([...1,2,3]);
// B: sumValues([...[1,2,3]]);
// C: sumValues(...[1,2,3]);
// D: sumValues([1,2,3]);

//op: C //console.log(sumValues(...[1,2,3]));


// 27
// const name = "code step byt step";
// console.log(!typeof name === 'object'); //false
// console.log(!typeof name === 'string'); //false 
// console.log(!typeof name === false); //true


// 28
// const name = "Rohan";
// const age = 27
// console.log(isNaN(name));    // true
// console.log(isNaN(age));    //false



// 29
// let person = {name: "Rohan"};
// Object.seal(person);
// what object modify person object
//op:
// person.name = 'sidhu';
// console.log(person);



// 30
// let data = [2,9,7,6];
// remove first element from the array
// op
// data.shift(); //[ 9, 7, 6 ]
// console.log(data);



// 31
// remove last element 
// op
// data.pop(); // [ 2, 9, 7 ]
// console.log(data);


// 32 :  check any value is even or odd
// let a = 30;
// if(a % 2 == 0) {
//     console.log('number is even');
// } else {
//     console.log('Number is Odd');
// }
//op : Number is even


// 33
// let data = {
//     name : "Rohan"
// }
// delete data.name;
// console.log(data);
//op : {}  //it means name property has been deleted.

// 34
// let data = 'true';
// convert data into boolean false value
//op:
// console.log(!data);


// 35
// let data = 'true';
// convert data into boolean true value
//op:
// console.log( typeof !!data);


// 36
// difference map & forEach function
// op:
// map function always return some value of different types
// forEach does not return anything.

// 37
// let data = ["mail", "peter","bruce"];
// delete data[1];
// console.log(data);
//Op: [ 'mail', <1 empty item>, 'bruce' ]  //length will br same

//38
//merge 2 arrys
// let a = [1,2,3];
// let b = [4,5,6];
// let result = [...a,...b];
// console.log(result);


// 39
// let a = [1,2,3,4];
// let b = [4,5,6];
// let result = [...a,...b];
// console.log(result);

// op : it will print all values (repeat values also get printed)
//   [
//     1, 2, 3, 4,
//     4, 5, 6
//   ]


// 40
// let c = 3 ** 3;
// console.log(c); //27


// 41
// let a = 2;
// setTimeout(()=>{
//     console.log(a)
// }, 0);

// a = 100;
//setTimeout works like API here, when program runs all code will be run first, and then setTimeout function will run. And when setTimeout funcion runs that time  variable a was already 100  & we'll get that output as 100.

























