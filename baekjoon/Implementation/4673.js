//백준->구현->셀프 넘버(4673)

let num = 0;
let data = [];
let i = 1;
let all = Array.from({ length: 10000 }, (_, i) => i + 1);
let result = [];

while (i <= 10000) {
  num = i;
  for (let j = 0; j < Number(i.toString().split('').length); j++) {
    num += Number(i.toString().split('')[j]);
  }
  data.push(num);
  i++;
}
data.sort((a, b) => a - b);
result = all.filter((n) => !data.includes(n));
result.map((n) => console.log(n));
