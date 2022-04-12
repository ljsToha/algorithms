//백준->구현->OX퀴즈(8958)

const [N, ...data] = require('fs')
  .readFileSync('8958.txt')
  .toString()
  .trim()
  .split('\n')
  .map((n) => n.replace('\r', ''));

// const [N, ...data] = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n')
//   .map((n) => n.replace('\r', ''));

let temp = 0;
let result = 0;
let answer = '';
for (let i = 0; i < N; i++) {
  for (let j = 0; j < data[i].length; j++) {
    if (data[i][j] === 'O') {
      temp += 1;
    } else {
      temp = 0;
    }
    result += temp;
  }
  answer += result + '\n';
  result = 0;
  temp = 0;
}
console.log(answer.trim());
