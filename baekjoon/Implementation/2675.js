//백준->구현->문자열 반복(2675)

let [N, ...input] = require('fs').readFileSync('2675.txt').toString().trim().split('\n');
// let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = Number(N);
let result = '';
for (let i = 0; i < N; i++) {
  let num = parseInt(input[i].split(' ')[0]);
  let data = input[i].replace('\r', '').split(' ')[1].split('');
  for (let j = 0; j < data.length; j++) {
    for (let k = 0; k < num; k++) {
      result += data[j];
    }
  }
  result = result + '\n';
}
console.log(result.trim());
