//백준->구현->X보다 작은 수(10871)
const [tempA, ...tempB] = require('fs').readFileSync('10871.txt').toString().trim().split('\n');
// const [tempA, ...tempB] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = Number(tempA.toString().trim().split(' ')[0]);
let X = Number(tempA.toString().trim().split(' ')[1]);
let data = tempB
  .toString()
  .trim()
  .split(' ')
  .map((n) => +n);
let result = '';
for (let i = 0; i < N; i++) {
  if (data[i] < X) {
    result += data[i] + ' ';
  }
}
console.log(result);
