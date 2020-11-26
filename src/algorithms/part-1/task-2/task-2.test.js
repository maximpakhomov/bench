const getWordsWithMostVowels = require('./task-2.js');

test('повторяющиеся слова состоят из гласных букв разной длины', () => {
  expect(getWordsWithMostVowels('а ааа а аа ааа аа')).toBe('ааа');
});

test('слова не содержат гласных букв', () => {
  expect(getWordsWithMostVowels('н нн ннн')).toBe('');
});

test('слова с одинаковым количеством гласных букв', () => {
  expect(getWordsWithMostVowels('надо ага угу ого')).toBe('ага,надо,ого,угу');
});

test('произвольный текст', () => {
  expect(getWordsWithMostVowels('Бык не дает молоко, а корова дает молоко.')).toBe('корова,молоко');
});
