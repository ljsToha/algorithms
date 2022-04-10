//백준->구현->두 수 비교하기(1330)

const [A, B] = require('fs')
  .readFileSync('1330.txt')
  .toString()
  .trim()
  .split(' ')
  .map((n) => +n);

// const [A, B] = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split(' ')
//   .map((n) => +n);

if (A > B) {
  console.log('>');
} else if (A < B) {
  console.log('<');
} else if (A === B) {
  console.log('==');
}
