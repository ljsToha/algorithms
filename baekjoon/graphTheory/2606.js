//백준->그래프 이론->바이러스(2606)
const input = require('fs').readFileSync('2606.txt').toString().trim().replaceAll('\r', '').split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().replaceAll('\r', '').split('\n');
const computer = Number(input.shift());
const connect = Number(input.shift());
const graph = Array(computer + 1)
  .fill()
  .map((n) => (n = []));
input.map((n) => {
  graph[Number(n.split(' ')[0])].push(Number(n.split(' ')[1]));
  graph[Number(n.split(' ')[1])].push(Number(n.split(' ')[0]));
});

const dfsVisited = Array(computer + 1).fill(false);
const dfsResult = [];
const dfs = (num) => {
  if (dfsVisited[num]) return;
  dfsVisited[num] = true;
  dfsResult.push(num);
  for (let i of graph[num]) {
    dfs(i);
  }
};
dfs(1);
console.log(dfsResult.length - 1);
