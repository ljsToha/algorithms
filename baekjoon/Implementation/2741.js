//백준->구현->N 찍기(2741)
const input = Number(require('fs').readFileSync('2741.txt').toString());
// let input = Number(require('fs').readFileSync('/dev/stdin').toString());
let result = '';
for (let i = 1; i <= input; i++) {
  result += i + '\n';
  // console.log(i) // 시간초과
}
console.log(result.trim());
