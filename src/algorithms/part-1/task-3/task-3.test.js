const getPalindromeSubstrOfMaxLength = require('./task-3.js');

test('произвольная строка с пробелами', () => {
  expect(getPalindromeSubstrOfMaxLength('а ааа а аа ааа аа')).toBe('аа ааа аа');
});

test('строка из одного символа', () => {
  expect(getPalindromeSubstrOfMaxLength('а')).toBe('');
});

test('строка не содержит подстроку палиндром', () => {
  expect(getPalindromeSubstrOfMaxLength('приветп')).toBe('');
});

test('строка из двух символа', () => {
  expect(getPalindromeSubstrOfMaxLength('аа')).toBe('аа');
});

test('подстрока палиндом в конце строки', () => {
  expect(getPalindromeSubstrOfMaxLength('абвгдеага')).toBe('ага');
});

test('подстрока палиндром в начале строки', () => {
  expect(getPalindromeSubstrOfMaxLength('угуабвгде')).toBe('угу');
});

test('подстрока палиндром в середине строки', () => {
  expect(getPalindromeSubstrOfMaxLength('молоко')).toBe('оло');
});

test('четное количество символов', () => {
  expect(getPalindromeSubstrOfMaxLength('.#123murderREDRUM321#.')).toBe('.#123murderredrum321#.');
});

test('нечетное количество символов', () => {
  expect(getPalindromeSubstrOfMaxLength('мадам')).toBe('мадам');
});

test('текст', () => {
  expect(getPalindromeSubstrOfMaxLength('Регулярные выражения - это шаблоны, используемые для сопоставления последовательностей символов в строках.')).toBe('сопос');
});
