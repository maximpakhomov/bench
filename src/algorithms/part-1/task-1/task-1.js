/**
 * Функция один раз перебирает входящую сроку посимвольно,
 * количество операций зависит от входных данных линейно, асимптотическая сложность алгоритма равна O(n)
 */
getMaxSubstrLength = (str) => {
  let maxSubstrLength = 0;
  let idx = 0;

  if (typeof str === 'string' && str.length) {
    for (let i = 0; i < str.length; i++) {
      if (str[i].localeCompare(str[i + 1]) >= 0 || (i + 1) === str.length) {
        substrLength = str.substring(idx, i + 1).length;

        if (substrLength > maxSubstrLength) maxSubstrLength = substrLength;

        idx = i + 1;
      }
    }
  }
  return maxSubstrLength;
}

module.exports = getMaxSubstrLength;
