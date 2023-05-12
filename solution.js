class Calculator {
  constructor() {
    //properties
    this.PI = Math.PI;
    this.E = Math.E;
  }

  //getter
  get pi() {
    return `PI (${this.PI})`;
  }
  get e() {
    return this.E.toString();
  }

  //methods
  //ratio calculation
  ratio(x, y, width) {
    const heightRatio = (width / x) * y;
    return `Height is ${heightRatio} on ratio ${x}:${y}`;
  }

  //pecentage calculation
  percentage(x, y) {
    if (y === 0) {
      return "Error: Divisor cannot be zero";
    } else {
      return `${(x / y) * 100}%`;
    }
  }

  //addition calculation
  add(x, y) {
    return x + y;
  }

  //subtraction calculation
  subtract(x, y) {
    return y - x;
  }

  //multiplication calculation
  multiply(x, y) {
    return x * y;
  }

  //division calculation
  divide(x, y) {
    if (y === 0) {
      return "Error: Divisor cannot be zero";
    } else {
      return x / y;
    }
  }

  //modulate calculation
  modulate(x, y) {
    if (y === 0) {
      ("Error: Divisor cannot be zero");
    } else {
      return x % y;
    }
  }

  //elevation calculation
  elevate(x, y) {
    return Math.pow(x, y);
  }

  //square root calculation
  sqrt(x) {
    if (x < 0) {
      return "Error: Cannot calculate the square root of a negative number";
    } else {
      return Math.sqrt(x);
    }
  }
}
const calc = new Calculator();
console.log(calc.pi);
console.log(calc.e);
console.log(calc.ratio(5, 7, 300)); // Height is 420 on ratio 5:7
console.log(calc.percentage(3, 12)); // 25%
console.log(calc.add(5, 7)); // 12
console.log(calc.subtract(5, 7)); // 2
console.log(calc.multiply(5, 7)); // 35
console.log(calc.divide(35, 7)); // 5
console.log(calc.modulate(7, 5)); // 2
console.log(calc.elevate(5, 3)); // 125
console.log(calc.sqrt(25)); // 5
