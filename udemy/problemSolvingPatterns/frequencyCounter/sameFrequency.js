// sameFrequency라는 함수를 작성하십시오.
// 두개의 양의 정수가 주어졌을 때 두 숫자의 자릿수가 같은지 확인하십시오.

const sameFrequency = (numA, numB) => {
  if (String(numA).length !== String(numB).length) return false;
  let first = {};
  let second = {};
  for (let cnt of String(numA)) {
    first[cnt] = (first[cnt] || 0) + 1;
  }
  for (let cnt of String(numB)) {
    second[cnt] = (second[cnt] || 0) + 1;
  }
  for (let key in first) {
    if (first[key] !== second[key]) {
      return false;
    }
  }
  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
