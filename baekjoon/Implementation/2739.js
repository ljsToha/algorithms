//백준->구현->구구단(2739)

let input = Number(require('fs').readFileSync('2739.txt').toString());
// let input = Number(require('fs').readFileSync('/dev/stdin').toString());

for (let i = 1; i <= 9; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}
