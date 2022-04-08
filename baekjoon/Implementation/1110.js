//백준->구현->더하기 사이클(1110)

let [A, B] = require('fs').readFileSync('1110.txt').toString().trim().split('');
// let [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
A = A ?? '0';
B = B ?? '0';
let C = '';
let input = (A ?? 0) + (B ?? 0);
let cnt = 1;

while (true) {
  C = String(parseInt(A) + parseInt(B));
  if (C.length == 2) {
    C = C.toString().split('')[1];
  }
  A = B;
  B = C;
  C = A + B;
  if (input !== C) {
    cnt++;
  } else {
    console.log(cnt);
    break;
  }
}
