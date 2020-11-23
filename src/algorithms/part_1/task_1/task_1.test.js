const getMaxSubstr = require('./task_1.js');

test('все буквы в прямом порядке', () => {
  expect(getMaxSubstr('абвгд')).toBe('абвгд');
});

test('все буквы в обратном порядке', () => {
  expect(getMaxSubstr('дгвба')).toBe('д');
});

test('поторяющиеся буквы', () => {
  expect(getMaxSubstr('ааа')).toBe('а');
});

test('подстрока из начала строки', () => {
  expect(getMaxSubstr('абвгдабва')).toBe('абвгд');
});

test('подстрока из середины строки', () => {
  expect(getMaxSubstr('абвабвгдабва')).toBe('абвгд');
});

test('подстрока из конца строки', () => {
  expect(getMaxSubstr('аабвабвгд')).toBe('абвгд');
});

test('строка с пробелами', () => {
  expect(getMaxSubstr('а абваб вгд')).toBe(' абв');
});

test('строка с цифрами', () => {
  expect(getMaxSubstr('а 10абваб 5вгд')).toBe(' 5вгд');
});
