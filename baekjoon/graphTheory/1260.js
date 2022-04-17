//백준->그래프 이론->DFS와 BFS(1260)
const input = require('fs').readFileSync('1260.txt').toString().trim().replaceAll('\r', '').split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().replaceAll('\r', '').split('\n');

const [N, M, V] = input.shift().split(' ').map(Number);
const graph = Array(N + 1)
  .fill()
  .map((n) => (n = []));

input.map((n) => {
  graph[Number(n.split(' ')[0])].push(Number(n.split(' ')[1]));
  graph[Number(n.split(' ')[1])].push(Number(n.split(' ')[0]));
});
graph.map((n) => n.sort((a, b) => a - b));

const dfsVisited = Array(N + 1).fill(false);
const dfsResult = [];

const dfs = (V) => {
  if (dfsVisited[V]) return;
  dfsVisited[V] = true;
  dfsResult.push(V);
  for (let i of graph[V]) {
    dfs(i);
  }
};

dfs(V);
console.log(dfsResult.join(' '));

const bfsVisited = Array(N + 1).fill(false);
const bfsResult = [];
const queue = [];
const bfs = (V) => {
  queue.push(V);
  bfsVisited[V] = true;
  bfsResult.push(V);
  while (queue.length > 0) {
    const temp = queue.shift();
    for (let i of graph[temp]) {
      if (bfsVisited[i]) continue;
      queue.push(i);
      bfsVisited[i] = true;
      bfsResult.push(i);
    }
  }
};

bfs(V);
console.log(bfsResult.join(' '));
