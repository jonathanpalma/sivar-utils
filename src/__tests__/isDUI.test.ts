import isDUI from '../isDUI';

// Disclaimer: valid cases were taken from Google! lol
const cases: [string, boolean][] = [
  ['', false],
  ['00000000-0', false],
  ['12345678-9', false],
  ['00016297-5', true],
  ['02495046-3', true],
  ['04288874-5', true],
];

describe('isDUI', () => {
  test.each(cases)('given %s should return %s', (arg, expected) => {
    const result = isDUI(arg);
    expect(result).toBe(expected);
  });
});
