//백준->구현->합(8393)
// let input = Number(require('fs').readFileSync('/dev/stdin').toString());
const input = Number(require('fs').readFileSync('8393.txt').toString().trim());

let result = 0;

for (let i = 1; i <= input; i++) {
  result += i;
}

console.log(result);
