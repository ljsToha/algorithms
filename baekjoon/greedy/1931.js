//백준->그리디->회의실 배정(1931)

let [N, ...data] = require('fs').readFileSync('1931.txt').toString().trim().split('\n');
// let [N, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let temp = data.map((n) => n.replace('\r', '')).sort((a, b) => a.split(' ')[1] - b.split(' ')[1] || a.split(' ')[0] - b.split(' ')[0]); //끝나는 시간이 같으면 먼저 시작하는 회의로 정렬
let cnt = 1;
let i = 0;
for (let j = 1; j < N; j++) {
  if (Number(temp[i].split(' ')[1]) <= Number(temp[j].split(' ')[0])) {
    i = j;
    cnt++;
  }
}

console.log(cnt);
