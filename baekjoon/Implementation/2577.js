//백준->구현->숫자의 개수(2577)

const nums = require('fs')
  .readFileSync('2577.txt')
  .toString()
  .split('\n')
  .map((n) => +n);

// const nums = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .split('\n')
//   .map((n) => +n);

let A = nums[0];
let B = nums[1];
let C = nums[2];
let result = String(A * B * C).split('');

let data = result.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

for (let i = 0; i < 10; i++) {
  data[i] === undefined ? console.log(0) : console.log(data[i]);
}
