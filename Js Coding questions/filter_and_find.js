/* 

filter() : method returns the mathched values in an array from the collection

find() : method retunrs the first value that matches from the collection. once it matches the value in findings, it will not check the remaining values in the array collection

*/

const empArr = [
    {name: "Rohan", age:29},
    {name: "amit", age:20},
    {name: "kiran", age:25},
    {name: "mohit", age:18},
    {name: "reva", age:78},
    {name: "nikhil", age:30},
    {name: "tarzan", age:25},
    {name: "sunny", age:19},
    {name: "Virat", age:34},
];

// const filterItem = empArr.filter((item)=> {
//     return item.age > 30;
// })
// console.log(filterItem);


const findItem = empArr.find((item)=>{
    return item.age > 20;
});
console.log(findItem);