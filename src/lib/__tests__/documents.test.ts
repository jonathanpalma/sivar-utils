import { isDUI, isNIT, isPassport, isCarPlate } from '../documents';

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
      ['06140512861294', true],
      ['06142902031111', false],
      ['0614080803111', false],
      ['06141107901137', true],
      ['06140808031114', true],
      ['0614-1107901137', false],
      ['0614080803-1114', false],
      ['0614-110790-1137', false],
      ['0614080803111-4', false],
    ];
    test.each(cases)('given %s should return %s', (arg, expected) => {
      const result = isNIT(arg);
      expect(result).toBe(expected);
    });
  });

  describe('isPassportFormat', () => {
    cases = [
      ['', false],
      ['A00000000-0', false],
      ['A12345678', true],
      ['B00016297', true],
      ['b02495046', true],
      ['A0428887', false],
      ['$03766021', false],
      ['#03766021', false],
      ['D05149147', true],
      ['d05149149', true],
      ['z04288874-1', false],
      ['03766021', false],
      ['B05149147-4', false],
      ['d05149149', true],
    ];
    test.each(cases)('given %s should return %s', (arg, expected) => {
      const result = isPassport(arg);
      expect(result).toBe(expected);
    });
  });

  describe('isCarPlate', () => {
    cases = [
      ['', false],
      ['p123456', true],
      ['N123456', true],
      ['N10731', true],
      ['N9715', true],
      ['P525929', true],
      ['CC123456', true],
      ['e123456', true],
      ['V123456', true],
      ['v123456', true],
      ['ve123456', false],
      ['Z123456', false],
      ['CD123456', true],
      ['pnc123456', true],
      ['CD123dfg456', false],
      ['1CD1', false],
      ['N-10731', false],
    ];
    test.each(cases)('given %s should return %s', (arg, expected) => {
      const result = isCarPlate(arg);
      expect(result).toBe(expected);
    });
  });
});
