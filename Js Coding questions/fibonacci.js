let a = 0, b =1;

console.log(a);
console.log(b);

for (var i=0; i<=10; i++) {
  let temp = a + b;
  a = b;
  b = temp;
  console.log(temp)
}