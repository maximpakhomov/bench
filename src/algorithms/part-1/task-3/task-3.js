getPalindromeSubstrOfMaxLength = (str) => {
  str = str.toLowerCase();
  let palindromeOfMaxLength = '';
  const strLength = str.length;

  // проходим по всем символам строки, сложность O(n - 1)
  for (let i = 0; i < strLength - 1; i++) {

    // ищем для каждого символа в строке аналогичный символ, сложность O(n - 1)
    for (let j = i + 1; j < strLength; j++) {

      // если найдено совпадение берется подстрока для анализа
      if (str[i] === str[j]) {
        const strToParse = str.substring(i, j + 1);
        const strToParseLength = strToParse.length;
        let isPalindrome = true;

        // исследуем полученную подстроку, сложность O(n/2)
        for (let i = 0; i < strToParseLength / 2; i++) {
          if (strToParse[i] !== strToParse[strToParseLength - 1 - i]) {
            isPalindrome = false;
          }
        }
        // если подстрока палиндром и она длинее текушей, обновляем значение переменной palindromeOfMaxLength
        if (isPalindrome && palindromeOfMaxLength.length < strToParseLength) palindromeOfMaxLength = strToParse;
      }
    }
  }
  return palindromeOfMaxLength;
}

module.exports = getPalindromeSubstrOfMaxLength;

// итоговая временная сложность функции если отбросить константы равна: O(n - 1) * O(n - 1) * O(n/2) = O(n^3)