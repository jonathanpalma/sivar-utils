import { isMunicipalityCode } from './municipalities';
import { isDate } from './utils';

export const duiRegExp = /(^\d{8})-(\d$)/;
export const nitRegExp = /(^\d{4})-(\d{6})-(\d{3})-(\d$)/;

/**
 * Verifies that given DUI format is valid
 *
 * @param  {string} str       A string representing DUI digits (with hyphen)
 * @returns {boolean}         Validity of the given DUI
 */
export function isDUI(str: string): boolean {
  if (!duiRegExp.test(str)) return false;

  let sum = 0;
  const [digits, verifier] = str.split('-');
  for (let i = 0; i < digits.length; i++) {
    sum += Number(digits[i]) * (digits.length + 1 - i);
  }

  return Number(verifier) === 10 - (sum % 10);
}

/**
 * Calculates verification value for a given old format NIT
 *
 * @param  {string} digits    A string representing NIT digits (without hyphen and verifier)
 * @returns {number}          Verification value for a given old format NIT
 */
function calculateNitVerificationOldFormat(digits: string): number {
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += Number(digits[i]) * (digits.length + 1 - i);
  }
  sum %= 11;
  return sum;
}

/**
 * Calculates verification value for a given NIT
 *
 * @param  {string} digits    A string representing NIT digits (without hyphen and verifier)
 * @returns {number}          Verification value for a given NIT
 */
function calculateNitVerification(digits: string): number {
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum +=
      Number(digits[i]) * (3 + 6 * Math.floor(Math.abs((i + 5) / 6)) - (i + 1));
  }
  sum %= 11;
  return sum > 1 ? 11 - sum : 0;
}

/**
 * Verifies that given NIT format is valid
 *
 * @param  {string} str       A string representing NIT digits (with hyphen)
 * @returns {boolean}         Validity of the given NIT
 */
export function isNIT(str: string): boolean {
  if (!nitRegExp.test(str)) return false;

  const [municipality, birthdate, correlative, verifier] = str.split('-');
  if (!isMunicipalityCode(municipality) || !isDate(birthdate)) return false;

  const digits = municipality + birthdate + correlative;
  const sum = correlative.startsWith('0')
    ? calculateNitVerificationOldFormat(digits)
    : calculateNitVerification(digits);

  return Number(verifier) === sum;
}
