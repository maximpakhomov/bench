getWordsWithMostVowels = (text) => {
  const wordsWithMostVowels = new Set();

  if (typeof text === 'string' && text.length) {
    const preparedText = text.replace(/[^a-zа-я0-9ё\s]/gi, ''); // временная сложность функции O(k), где k - количество символов в тексте
    const words = preparedText.split(' '); // временная сложность функции O(n), где n - количество слов в тексте
    let maxVowelsCount = 0;

    // временная сложность цикла O(n), где n - количество слов в тексте
    for (const word of words) {
      const vowels = word.match(/[аеёиоуыэюя]/gi); // временная сложность функции O(m), где m-длина строки
      const vowelsCount = vowels ? vowels.length : 0;

      if (vowelsCount) {
        if (vowelsCount === maxVowelsCount) {
          wordsWithMostVowels.add(word); // Set для поиска, удаления и добавления элементов, имеет временную сложность O(1)
        } else if (vowelsCount > maxVowelsCount) {
          wordsWithMostVowels.clear();
          wordsWithMostVowels.add(word);
          maxVowelsCount = vowelsCount;
        }
      }
    }
  }
  // временная сложность функции sort() O(nlogn), где n - количество слов в тексте
  return Array.from(wordsWithMostVowels).sort().toString();
}

module.exports = getWordsWithMostVowels;

// итого, k + n + (n * m) + nlogn
