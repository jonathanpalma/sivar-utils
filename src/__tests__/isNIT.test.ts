import isNIT from '../isNIT';

const cases: [string, boolean][] = [
  ['', false],
  ['0614-324234-111-5', false],
  ['0101-010101-101-1', false],
  ['0614-110790-113-7', true],
  ['0614-080803-111-4', true],
  ['0620-080803-111-4', false],
  ['3620-080803-111-4', false],
  ['9620-080803-111-0', true],
];

describe('isNIT', () => {
  test.each(cases)('given %s should return %s', (arg, expected) => {
    const result = isNIT(arg);
    expect(result).toBe(expected);
  });
});
