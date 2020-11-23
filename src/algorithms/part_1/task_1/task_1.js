getMaxSubstr = (str) => {
  let maxSubstr = '';
  let idx = 0;

  if (str.length) {
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
