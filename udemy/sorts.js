const numbers = [3, 5, 4, 1, 6];
// 제일 큰수 제일 작은수 2큰수 2작은수
function solution(numbers) {
  const answer = [];
  const acs = numbers.sort((a, b) => b - a);
  let i = 0,
    j = 1,
    k = 0;
  while (acs.length !== answer.length) {
    if (i % 2 === 0) {
      answer.push(acs[k]);
      k++;
    } else {
      answer.push(acs[acs.length - j]);
      j++;
    }
    i++;
  }
  return answer;
}

console.log(solution(numbers));
