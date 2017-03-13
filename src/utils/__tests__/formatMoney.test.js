import { formatMoney } from '../formatMoney';

test('EUR, 123.135 => "€ 123.14"', () => {
  const code = 'EUR';
  const value = '123.135';
  const output = '€ 123.14';
  expect(formatMoney(code, value)).toBe(output);
});

test('EUR, 434671263757234123645.135 => "€ 434671263757234123645.14"', () => {
  const code = 'EUR';
  const value = '434671263757234123645.135';
  const output = '€ 434671263757234123645.14';
  expect(formatMoney(code, value)).toBe(output);
});
