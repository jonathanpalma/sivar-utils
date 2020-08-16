import { isMunicipalityCode } from '../municipalities';

describe('municipalities', () => {
  let cases: [string, boolean][] = [];

  describe('isMunicipalityCode', () => {
    cases = [
      ['', false],
      ['0', false],
      ['123', false],
      ['0000', false],
      ['2540', false],
      ['0620', false],
      ['3620', false],
      ['0614', true],
      ['0101', true],
      ['9620', true],
    ];
    test.each(cases)('given %s should return %s', (arg, expected) => {
      const result = isMunicipalityCode(arg);
      expect(result).toBe(expected);
    });
  });
});
