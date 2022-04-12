//백준->구현->나머지(10430)

// const [A, B, C] = require('fs')
//   .readFileSync('10430.txt')
//   .toString()
//   .trim()
//   .split(' ')
//   .map((n) => +n);

const [A, B, C] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((n) => +n);

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
