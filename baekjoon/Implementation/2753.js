//백준->구현->윤년(2753)
// const num = Number(require('fs').readFileSync('/dev/stdin').toString());
const num = Number(require('fs').readFileSync('2753.txt').toString());
let result = 0;
if (num % 4 === 0) {
  if (num % 100 !== 0 || num % 400 === 0) {
    result = 1;
  } else {
    result = 0;
  }
} else {
  result = 0;
}
console.log(result);
