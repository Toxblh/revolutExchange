import { getSymbolCode } from '../getSymbolCode';

test('code=EUR => €', () => {
  const code = 'EUR';
  const output = '€';
  expect(getSymbolCode(code)).toBe(output);
});

test('code=GBP => £', () => {
  const code = 'GBP';
  const output = '£';
  expect(getSymbolCode(code)).toBe(output);
});

test('code=USD => $', () => {
  const code = 'USD';
  const output = '$';
  expect(getSymbolCode(code)).toBe(output);
});

test('code=LoL => ""', () => {
  const code = 'LoL';
  const output = '';
  expect(getSymbolCode(code)).toBe(output);
});
