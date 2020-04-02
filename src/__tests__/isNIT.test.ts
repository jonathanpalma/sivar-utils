import isNIT from '../isNIT';

const cases: [string, boolean][] = [['', false]];

describe('isNIT', () => {
  test.each(cases)('given %s should return %s', (arg, expected) => {
    const result = isNIT(arg);
    expect(result).toBe(expected);
  });
});
