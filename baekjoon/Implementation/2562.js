//백준->구현->최댓값(2562)
const input = require('fs')
  .readFileSync('2562.txt')
  .toString()
  .trim()
  .split('\n')
  .map((n) => +n.replace('\r', ''));

// const input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n')
//   .map((n) => +n.replace('\r', ''));

console.log(Math.max(...input));
console.log(input.indexOf(Math.max(...input)) + 1);
