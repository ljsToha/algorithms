//백준->그리디->보물(1026)

const input = require('fs').readFileSync('1026.txt').toString().trim().replaceAll('\r', '').split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().replaceAll('\r', '').split('\n');
let N = Number(input[0]);
let A = input[1]
  .split(' ')
  .map((n) => +n)
  .sort((a, b) => a - b);
let B = input[2]
  .split(' ')
  .map((n) => +n)
  .sort((a, b) => b - a);
let result = 0;

for (let i = 0; i < N; i++) {
  result += A[i] * B[i];
}

console.log(result);
