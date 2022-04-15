//백준->그리디->거스름돈(5585)

let input = require('fs').readFileSync('5585.txt').toString().trim();
// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let change = 1000 - input;
const moneys = [500, 100, 50, 10, 5, 1];
let i = 0;
let cnt = 0;
while (true) {
  if (change - moneys[i] >= 0) {
    change -= moneys[i];
    cnt++;
  } else {
    i++;
  }
  if (change === 0) {
    break;
  }
}
console.log(cnt);
