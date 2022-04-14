//백준->구현->사분면 고르기(14681)

const input = require('fs')
  .readFileSync('14681.txt')
  .toString()
  .trim()
  .split('\n')
  .map((n) => +n);

// let input = require('fs').readFileSync(0).toString().trim().split('\n').map((n) => +n);

// ★ 여기서 fs.readFileSync에 dev/stdin을 항상 입력해왔는데, ★
// ★ 여기서 dev/stdin을 입력하면 런타임에러가 나옵니다.
// ★ 그래서 이 부분을 0으로 표시해줬습니다. ★

let A = input[0];
let B = input[1];
let result = '';

if (A > 0) {
  if (B > 0) {
    result = 1;
  } else {
    result = 4;
  }
} else {
  if (B > 0) {
    result = 2;
  } else {
    result = 3;
  }
}

console.log(result);
