//백준->구현->A+B-8(11022)

// let [N, ...input] = require('fs')
//   .readFileSync('11022.txt')
//   .toString()
//   .trim()
//   .split('\n')
//   .map((n) => n.replace('\r', ''));

let [N, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((n) => n.replace('\r', ''));

let A = 0;
let B = 0;
for (let i = 0; i < N; i++) {
  A = parseInt(input[i].split(' ')[0]);
  B = parseInt(input[i].split(' ')[1]);
  console.log(`Case #${i + 1}: ${A} + ${B} = ${A + B}`);
}
