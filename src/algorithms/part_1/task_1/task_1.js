/**
 * Функция один раз перебирает входящую сроку посимвольно,
 * количество операций зависит от входных данных линейно, асимптотическая сложность алгоритма равна O(n)
 */
getMaxSubstr = (str) => {
  let maxSubstr = '';
  let idx = 0;

  if (typeof str === 'string' && str.length) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= str[i + 1] || (i + 1) === str.length) {
        substr = str.substring(idx, i + 1);

        if (substr.length > maxSubstr.length) maxSubstr = substr;

        idx = i + 1;
      }
    }
  }
  return maxSubstr;
}

module.exports = getMaxSubstr;
