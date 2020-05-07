import { isDUI, isNIT } from '../documents';

describe('documents', () => {
  let cases: [string, boolean][] = [];

  describe('isDUI', () => {
    cases = [
      ['', false],
      ['00000000-0', false],
      ['12345678-9', false],
      ['00016297-5', true],
      ['02495046-3', true],
      ['04288874-5', true],
      ['03766021-3', true],
      ['05149147-4', true],
      ['05149149-0', true],
    ];
    test.each(cases)('given %s should return %s', (arg, expected) => {
      const result = isDUI(arg);
      expect(result).toBe(expected);
    });
  });

  describe('isNIT', () => {
    cases = [
      ['', false],
      ['0614-324234-111-5', false],
      ['0101-010101-101-1', false],
      ['0620-080803-111-4', false],
      ['3620-080803-111-4', false],
      ['9620-880803-111-1', false],
      ['0614-290203-111-1', false],
      ['9620-080803-111-0', true],
      ['0614-051286-129-4', true],
      ['0614-110790-113-7', true],
      ['0614-080803-111-4', true],
    ];
    test.each(cases)('given %s should return %s', (arg, expected) => {
      const result = isNIT(arg);
      expect(result).toBe(expected);
    });
  });
});
