//백준->그래프 이론->미로 탐색(2178)
const input = require('fs').readFileSync('2178.txt').toString().trim().replaceAll('\r', '').split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().replaceAll('\r', '').split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const graph = input.map((n) => n.split('').map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const queue = [];

const bfs = (sx, sy) => {
  queue.push([sx, sy]);
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;
      if (nx > -1 && nx < N && ny > -1 && ny < M) {
        if (graph[nx][ny] === 1) {
          graph[nx][ny] = graph[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
  console.log(graph[N - 1][M - 1]);
};

bfs(0, 0);
