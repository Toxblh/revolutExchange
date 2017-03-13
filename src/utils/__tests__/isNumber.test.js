import { isNumber } from '../isNumber';

test('123.12 - true', () => {
  expect(isNumber('123.12')).toBeTruthy();
});

test('123,12 - false', () => {
  expect(isNumber('123,12')).toBeFalsy();
});

test('0.122 - false', () => {
  expect(isNumber('0.122')).toBeFalsy();
});

test('12d3.12 - false', () => {
  expect(isNumber('12d3.12')).toBeFalsy();
});

test('asd - false', () => {
  expect(isNumber('asd')).toBeFalsy();
});

test('123.120 - false', () => {
  expect(isNumber('123.120')).toBeFalsy();
});
