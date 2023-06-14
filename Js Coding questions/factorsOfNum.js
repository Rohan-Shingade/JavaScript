const num = 25;

if (num < 0) {
  console.log("Entered Number is Negative");
} else {

  console.log(`factors of ${num}`);
  
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      console.log(i);
    }
  }
}
