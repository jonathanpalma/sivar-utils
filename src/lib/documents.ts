import { isMunicipalityCode } from './municipalities';
import { isDate } from './utils';

export const duiRegExp = /(^\d{8})-(\d$)/;
export const nitRegExp = /((^\d{4})-(\d{6})-(\d{3})-(\d$))|(^\d{14}$)/;
export const passportRegExp = /^[a-zA-Z]\d{8}$/;
export const carPlateRegExp = /^(O|N|CD|CC|P|A|C|V|PR|T|RE|AB|MI|MB|F|M|D|PNC|E)\d{1,6}$/i;

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

  return Number(verifier) === (10 - (sum % 10)) % 10 && sum > 0;
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
 * @param  {string} str       A string representing NIT digits (with hyphen)
 * @returns {string[]}        NIT compounds
 */
function splitNIT(str: string): string[] {
  const municipality = str.substring(0, 4);
  const birthdate = str.substring(4, 10);
  const correlative = str.substring(10, 13);
  const verifier = str.substring(13);
  return [municipality, birthdate, correlative, verifier];
}

/**
 * Verifies that given NIT format is valid
 *
 * @param  {string} str       A string representing NIT digits
 * @returns {boolean}         Validity of the given NIT
 */
export function isNIT(str: string): boolean {
  if (!nitRegExp.test(str)) return false;

  const [municipality, birthdate, correlative, verifier] = str.includes('-')
    ? str.split('-')
    : splitNIT(str);
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
export function isPassport(str: string): boolean {
  return passportRegExp.test(str.toUpperCase());
}

/**
 * Verifies that given car plate is valid
 *
 * @param  {string} str       A string representing a car plate
 * @returns {boolean}         Validity of the given Car Plate
 */
export function isCarPlate(str: string): boolean {
  return carPlateRegExp.test(str);
}
