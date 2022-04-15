//백준->그리디->ATM(11399)

let [N, ...input] = require('fs').readFileSync('11399.txt').toString().trim().split('\n');
// let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let result = 0;
let answer = 0;
N = Number(N);
input = input
  .toString()
  .split(' ')
  .map((n) => +n)
  .sort((a, b) => a - b);
for (let i = 0; i < N; i++) {
  result += input[i];
  answer += result;
}
console.log(answer);
