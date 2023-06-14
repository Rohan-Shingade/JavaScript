var number = prompt ("enter number: ");
if (number == 1) {
  console.log(`${number} is not prime neither composit number`);
} else if (number < 1) {
  console.log(`prime no is not possible for ${number} number bcz its negative `);
} else {
  for (let i=2; i<number; i++) {
    // let flag = true;

    if(number % i == 0) {
      var result = `${number} is not prime number`;
    }else {
      result = `${number} is prie number`;
    }
  }
  console.log(result)                                                                                      
}