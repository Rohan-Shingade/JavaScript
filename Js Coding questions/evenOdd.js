const numArray = [1,4,7,6,4,8,7,6];

const even = numArray.filter((number) => {
    return number % 2 == 0;
})
console.log(even);

const odd = numArray.filter((number) => {
    return number % 2 != 0;
})
console.log(odd);

    
