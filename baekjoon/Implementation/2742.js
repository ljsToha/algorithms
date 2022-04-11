//백준->구현->기찍 N(2742)
// const num = Number(require('fs').readFileSync('/dev/stdin').toString());
const num = Number(require('fs').readFileSync('2742.txt').toString());
let result = '';
for (let i = num; i > 0; i--) {
  result += i + '\n';
}

console.log(result.trim());
