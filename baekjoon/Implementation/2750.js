//백준->구현->수 정렬하기(2750)
let input = require('fs').readFileSync('./2750.txt').toString().split('\n');
// let input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
input.sort((a, b) => a - b);
for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}
