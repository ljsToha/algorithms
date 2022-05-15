const students = ['AAALLLAPAA', 'AAAAAAAPPP', 'ALAAAAPAAA'];
// 기본 10
// 출석 : A 1점
// 결석 : P -1 점, 3번 결석 시 최종점수 0 점
// 지각 : L 0점, 2번 결석 시 -1점
// 점수가 높은순으로 출력 동률 오름 차순

const score = (student) => {
  let result = {};
  let answer = 0;
  for (let word in student) {
    let temp = student[word];
    if (/[A-Z]/.test(temp)) result[temp] > 0 ? result[temp]++ : (result[temp] = 1);
  }
  isNaN(result['A']) ? (answer = 10) : (answer = 10 + Number(result['A']));
  if (!isNaN(result['L'])) answer = answer - Number(Math.floor(result['L'] / 2));
  if (!isNaN(result['P'])) result['P'] >= 3 ? (answer = 0) : (answer = answer - Number(result['P']));
  return answer;
};

function solution(students) {
  let data = [];
  for (let i = 0; i < students.length; i++) {
    data.push({ no: i + 1, num: score(students[i]) });
  }
  return data.sort((a, b) => b['num'] - a['num']).map((n) => n['no']);
}

console.log(solution(students));
