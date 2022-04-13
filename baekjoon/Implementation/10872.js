//백준->구현->팩토리얼(10872)

let num = Number(require('fs').readFileSync('10872.txt').toString().trim());
// let num = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let result = 1;
for (let i = num; i >= 1; i--) {
  result *= i;
}
console.log(result);
