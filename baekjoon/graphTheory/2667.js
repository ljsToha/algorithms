//백준->그래프 이론->단지번호붙이기(2667)

const input = require('fs').readFileSync('2667.txt').toString().trim().replaceAll('\r', '').split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().replaceAll('\r', '').split('\n');
const num = Number(input.shift());
const graph = input.map((n) => n.split('').map(Number));
let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];
let cnt = 0;
let house = [];

const dfs = (i, j) => {
  if (i > -1 && i < num && j > -1 && j < num) {
    if (graph[i][j] === 1) {
      graph[i][j] = 0;
      cnt++;
      for (let k = 0; k < 4; k++) {
        dfs(dx[k] + i, dy[k] + j);
      }
    }
  }
};

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (graph[i][j] === 1) {
      dfs(i, j);
      house.push(cnt);
      cnt = 0;
    }
  }
}
house.sort((a, b) => a - b);
console.log(house.length);
house.map((n) => console.log(n));
