//백준->구현->별 찍기-1(2438)

let num = Number(require('fs').readFileSync('2438.txt').toString());
// let num = Number(require('fs').readFileSync('/dev/stdin').toString());
let result = '';
for (let i = 0; i < num; i++) {
  result += '*';
  console.log(result);
}
