getPalindromeSubstrOfMaxLength = (str) => {
  str = str.toLowerCase().replace(/[\s]/g, '');
  let palindromeOfMaxLength = '';
  const strLength = str.length;

  for (let i = 0; i < strLength; i++) {
    for (let j = i; j < strLength; j++) {
      if (str[i] === str[j]) {
        const strToParse = str.substring(i, j + 1);
        const strToParseLength = strToParse.length;

        for (let i = 0; i < strToParseLength; i++) {
          if (strToParse[i] === strToParse[strToParseLength - 1 - i]) {
            if (palindromeOfMaxLength.length < strToParseLength) palindromeOfMaxLength = strToParse;
          }
        }
      }
    }
  }
  return palindromeOfMaxLength;
}

module.exports = getPalindromeSubstrOfMaxLength;

test = getPalindromeSubstrOfMaxLength('Сел в озере березов лес');
test2 = getPalindromeSubstrOfMaxLength('abcded');

console.log(test);
console.log(test2);
