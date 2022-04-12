//백준->구현->세 수(10817)
const nums = require('fs')
  .readFileSync('10817.txt')
  .toString()
  .split(' ')
  .map((n) => +n)
  .sort((a, b) => a - b);

// const nums = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .split(' ')
//   .map((n) => +n)
//   .sort((a, b) => a - b);

console.log(nums[1]);
