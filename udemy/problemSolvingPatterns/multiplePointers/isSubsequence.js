// 두개의 문자열을 받아서 첫 번쨰 문자열의 문자가 두 번째 문자열의 문자의 하위 스퀀스를 형성하는지 확인하는 isSubsequence라는 함수를 작성하세요.
// 즉 함수는 첫 번쨰 문자열의 문자가 순서를 변경하지 않고 두 번째 문자열의 어딘가에 나타나는지 확인해야합니다.

const isSubsequence = (wordA, wordB) => {
  let j = 0;
  for (let i = 0; i < wordB.length; i++) {
    if (wordA[j] === wordB[i]) {
      j++;
      if (wordA.length === j) return true;
    }
  }
  return false;
};

// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     console.log(str2[j], str1[i]);
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
