//백준->구현->사칙연산(10869)

const [A, B] = require('fs')
  .readFileSync('10869.txt')
  .toString()
  .trim()
  .split(' ')
  .map((n) => +n);
// const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map((n) => +n);

const Add = A + B;
const Sub = A - B;
const Mul = A * B;
const Div = parseInt(A / B);
const Rem = A % B;

console.log(Add);
console.log(Sub);
console.log(Mul);
console.log(Div);
console.log(Rem);
