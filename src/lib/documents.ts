import { isMunicipalityCode } from './municipalities';
import { isDate } from './utils';

export const duiRegExp = /(^\d{8})-(\d$)/;
export const nitRegExp = /(^\d{4})-(\d{6})-(\d{3})-(\d$)/;
export const passportRegExp = /^[A|B|D]\d{8}$/;

/**
 * Verifies that given DUI digits are valid for a specific verifier
 *
 * @param  {number} digits    A number representing DUI digits (8 digits)
 * @param  {number} verifier  A number representing DUI verifier (1 digit)
 * @returns {boolean}         Validity of the given DUI
 */
function isValidDUI(digits: number, verifier: number): boolean {
  let sum = 0;
  for (let i = 0; i < String(digits).length; i++) {
    sum += Number(String(digits)[i]) * (String(digits).length + 1 - i);
  }

  return Number(verifier) === (10 - (sum % 10)) % 10 && sum > 0;
}

/**
 * Verifies that given DUI with hyphen is valid
 *
 * @param  {string} str       A string representing DUI digits (with hyphen)
 * @returns {boolean}         Validity of the given DUI
 */
function isDUIWithHyphen(str: string): boolean {
  if (!duiRegExp.test(str)) return false;
  const [digits, verifier] = str.split('-');
  return isValidDUI(Number(digits), Number(verifier));
}

/**
 * Verifies that given DUI in numeric format is valid
 *
 * @param  {string} str       A string representing DUI digits (without hyphen)
 * @returns {boolean}         Validity of the given DUI
 */
function isDUIWithNumbers(str: string): boolean {
  if (!(str.length === 9)) return false;
  const digits = str.slice(0, 8);
  const verifier = str.slice(8);
  return isValidDUI(Number(digits), Number(verifier));
}

/**
 * Verifies that given DUI format is valid
 *
 * @param  {string} str       A string representing DUI digits (with hyphen)
 * @returns {boolean}         Validity of the given DUI
 */
export function isDUI(str: string): boolean {
  if (Number(str)) return isDUIWithNumbers(str);
  return isDUIWithHyphen(str);
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

/**
 * Verifies that given Passport format is valid
 *
 * @param  {string} str       A string representing the passport
 * @returns {boolean}         Validity of the given passport
 */
export function isPassportFormat(str: string): boolean {
  return passportRegExp.test(str.toUpperCase());
}

/**
 * Verifies that given Passport is valid
 *
 * @param  {string} str       A string representing the passport
 * @param  {string} dui       A string representing the dui
 * @returns {boolean}         Validity of the given passport
 */
export function isPassport(str: string, dui: string): boolean {
  if (!isPassportFormat(str)) return false;
  if (!isDUI(dui)) return false;
  return true;
}
