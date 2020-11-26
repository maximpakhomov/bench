const getMaxSubstrLength = require('./task-1.js');

test('все буквы в прямом порядке', () => {
  expect(getMaxSubstrLength('абвгд')).toBe(5);
});

test('все буквы в обратном порядке', () => {
  expect(getMaxSubstrLength('дгвба')).toBe(1);
});

test('поторяющиеся буквы', () => {
  expect(getMaxSubstrLength('ааA')).toBe(1);
});

test('поторяющиеся буквы', () => {
  expect(getMaxSubstrLength('ааа')).toBe(1);
});

test('подстрока из начала строки', () => {
  expect(getMaxSubstrLength('абвгдабва')).toBe(5);
});

test('подстрока из середины строки', () => {
  expect(getMaxSubstrLength('абвабвгдабва')).toBe(5);
});

test('подстрока из конца строки', () => {
  expect(getMaxSubstrLength('аабвабвгд')).toBe(5);
});

test('строка с пробелами', () => {
  expect(getMaxSubstrLength('а абваб вгд')).toBe(4);
});

test('строка с цифрами', () => {
  expect(getMaxSubstrLength('а 10абваб 5вгд')).toBe(5);
});

test('пустая строка', () => {
  expect(getMaxSubstrLength('')).toBe(0);
});

test('не строка', () => {
  expect(getMaxSubstrLength(12345)).toBe(0);
});
