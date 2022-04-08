//백준->구현->A/B(1008)

const [A, B] = require('fs')
  .readFileSync('1008.txt')
  .toString()
  .trim()
  .split(' ')
  .map((n) => +n);
// const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map((n) => +n);

const result = A / B;

console.log(result);
