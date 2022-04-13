//백준->구현->A+B-4(10951)

let input = require('fs')
  .readFileSync('10951.txt')
  .toString()
  .trim()
  .split('\n')
  .map((n) => n.replace('\r', ''));

// let input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n')
//   .map((n) => n.replace('\r', ''));

let A = 0;
let B = 0;
for (let i = 0; i < input.length; i++) {
  A = parseInt(input[i].split(' ')[0]);
  B = parseInt(input[i].split(' ')[1]);
  console.log(A + B);
}
