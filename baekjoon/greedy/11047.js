//백준->그리디->동전 0(11047)
const input = require('fs').readFileSync('11047.txt').toString().trim().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let K = Number(input[0].toString().trim().split(' ')[1]);
input.shift();
let money = input.map((n) => +n).sort((a, b) => b - a);
let i = 0;
let cnt = 0;

while (K >= 0) {
  if (K - money[i] >= 0) {
    K -= money[i];
    cnt++;
  } else {
    i++;
  }
  if (K === 0) {
    break;
  }
}
console.log(cnt);
