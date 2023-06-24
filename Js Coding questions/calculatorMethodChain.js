/*
calc.number(10).add(3).print().sub(6).print().multiply(10).print().divide(2).print();
calc.number(10).add(3).print(); // 13
calc.number(10).sub(3).print() // 7
*/

function Calculator() {
  this.sum = 0;
  this.number = function (initalValue) {
    this.sum = initalValue;
    return this;
  };

  this.add = function (val) {
    this.sum += val;
    return this;
  };
  this.sub = function (val) {
    this.sum -= val;
    return this;
  };
  this.multiply = function (val) {
    this.sum *= val;
    return this;
  };
  this.divide = function (val) {
    this.sum /= val;
    return this;
  };
  this.print = function () {
    console.log(this.sum);
    return this;
  };
}
const calc = new Calculator();
calc
  .number(10)
  .add(3)
  .print()
  .sub(6)
  .print()
  .multiply(10)
  .print()
  .divide(2)
  .print();
