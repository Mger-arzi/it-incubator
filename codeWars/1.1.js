function findAverage(array) {
  let average = 0;
  let sum = 0;
  for (let i; (i = array.length); i++) {
    sum += array[i];
  }
  average = sum / array.length;
  if (array === []) {
    return 0;
  } else return average;
}

function getChar(c) {
  let code = String.fromCharCode(c);
  console.log(code);
}
getChar(8);
const code = 97;

const character = String.fromCharCode(code);

console.log(character);

function findShort(s) {
  let arr = s.split(" ").sort((a, b) => a.length - b.length);
  return arr[0].length;
}

function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    if (a <= 0 || b <= 0 || c <= 0) {
      return false;
    } else {
      return false;
    }
  }
}

let v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250;

function equal1() {
  let a = v1,
    b = v1;
  return a + b;
}

function equal2() {
  let a = v3,
    b = v1;
  return a - b;
}

function equal3() {
  let a = v1,
    b = v5;
  return a * b;
}

function equal4() {
  let a = v4,
    b = v5;
  return a / b;
}

function equal5() {
  let a = v2,
    b = v4;
  return a % b;
}

function oddOrEven(array) {
  return array.reduce(function (sum, item) {
    return sum + item;
  }, 0) %
    2 ==
    0
    ? "even"
    : "odd";
}
