import fc from 'fast-check';
import {
  isMobilePhoneNumber,
  isResidentialPhoneNumber,
  isPhoneNumber,
} from '../telephones';

/**
 * Mask a number with phone format
 *
 * @memberof helpers
 * @param {number} number A 8 digits number
 * @returns {string} A phone number formatted
 */
const maskPhoneNumber = (number: number): string =>
  number.toString().replace(/^(\d{4})(\d{4})$/, '$1-$2');
/**
 * Generate mobile phone numbers from 6000-0000 to 7999-9999
 *
 * @returns {() => fc.Arbitrary<string>} A random mobile phone number
 */
const mobilePhone: () => fc.Arbitrary<string> = () =>
  fc.integer(60000000, 79999999).map(maskPhoneNumber);
/**
 * Generate residential phone number from 2000-0000 to 2999-9999
 *
 * @returns {() => fc.Arbitrary<string>} A random residential phone number
 */
const residentialPhone: () => fc.Arbitrary<string> = () =>
  fc.integer(20000000, 29999999).map(maskPhoneNumber);

describe('telephones', () => {
  describe('isMobilePhone', () => {
    test('should verify mobile phone numbers', () =>
      fc.assert(
        fc.property(mobilePhone(), (phone) => isMobilePhoneNumber(phone))
      ));

    test('should returns false for everything else', () =>
      fc.assert(
        fc.property(
          fc.oneof(fc.anything(), fc.string(9)),
          (phone) => !isMobilePhoneNumber(phone as any)
        )
      ));
  });

  describe('isResidentialPhone', () => {
    test('should verify residential phone numbers', () =>
      fc.assert(
        fc.property(residentialPhone(), (phone) =>
          isResidentialPhoneNumber(phone)
        )
      ));

    test('should returns false for everything else', () =>
      fc.assert(
        fc.property(
          fc.oneof(fc.anything(), fc.string(9)),
          (phone) => !isResidentialPhoneNumber(phone as any)
        )
      ));
  });

  describe('isPhoneNumber', () => {
    test('should verify phone numbers', () =>
      fc.assert(
        fc.property(fc.oneof(mobilePhone(), residentialPhone()), (phone) =>
          isPhoneNumber(phone)
        )
      ));

    test('should returns false for everything else', () =>
      fc.assert(
        fc.property(
          fc.oneof(fc.hexaString(), fc.base64String()),
          (phone) => !isPhoneNumber(phone)
        )
      ));
  });
});
