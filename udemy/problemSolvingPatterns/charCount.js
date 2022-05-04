charCount = (str) => {
  let result = {};
  for (let word in str) {
    let temp = str[word].toLowerCase();
    if (/[a-z0-9]/.test(temp)) {
      result[temp] > 0 ? result[temp]++ : (result[temp] = 1);
    }
  }

  return result;
};

console.log(charCount('ruka toha an annual Salary of Seventy eight million won!'));
