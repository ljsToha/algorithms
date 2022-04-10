//백준->구현->별 찍기-2(2439)

const num = Number(require('fs').readFileSync('2439.txt').toString().trim());
// const num = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

for (let i = 0; i < num; i++) {
  console.log(
    Array.from({ length: num - i - 1 }, () => ' ')
      .concat(Array.from({ length: i + 1 }, () => '*'))
      .join('')
  );
}
