//백준->구현->빠른 A+B(15552)

let [N, ...input] = require('fs')
  .readFileSync('15552.txt')
  .toString()
  .trim()
  .split('\n')
  .map((n) => n.replace('\r', ''));

// let [N, ...input] = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n')
//   .map((n) => n.replace('\r', ''));

let A = 0;
let B = 0;
let result = '';
for (let i = 0; i < N; i++) {
  A = parseInt(input[i].split(' ')[0]);
  B = parseInt(input[i].split(' ')[1]);
  result += A + B + '\n';
}
console.log(result.trim());
