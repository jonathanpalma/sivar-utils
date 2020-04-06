import isMunicipalityCode from './isMunicipalityCode';

export const nitRegExp = /(^\d{4})-(\d{6})-(\d{3})-(\d$)/;

/**
 * Calculates verification value for a given old format NIT
 *
 * @param  {string} digits    A string representing NIT digits (without hyphen and verifier)
 * @returns {number}          Verification value for a given old format NIT
 */
function calculateVerificationOldFormat(digits: string): number {
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
function calculateVerification(digits: string): number {
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum +=
      Number(digits[i]) * (3 + 6 * Math.floor(Math.abs((i + 5) / 6)) - (i + 1));
  }
  sum %= 11;
  return sum > 1 ? 11 - sum : 0;
}

/**
 * Calculates full year for a given two-digit format year
 *
 * @param  {string} year      A string representing two-digit format year
 * @returns {string}          Full year
 */
function getFullYear(year: string): string {
  return Number(year) >=
    Number(new Date().getFullYear().toString().substr(-2)) + 1
    ? '19'.concat(year)
    : '20'.concat(year);
}

/**
 * Verifies that given NIT format birthdate is valid
 *
 * @param  {string} str       A string representing NIT format birthdate
 * @returns {boolean}         Validity of the given birthdate
 */
function isDate(str: string): boolean {
  const year = getFullYear(str.substring(4));
  const month = str.substring(2, 4);
  const day = str.substring(0, 2);
  const date = new Date(`${year}/${month}/${day}`);
  return date && Number(date.getMonth()) + 1 === Number(month);
}

/**
 * Verifies that given NIT format is valid
 *
 * @param  {string} str       A string representing NIT digits (with hyphen)
 * @returns {boolean}         Validity of the given NIT
 */
function isNIT(str: string): boolean {
  if (!nitRegExp.test(str)) return false;

  const [municipality, birthdate, correlative, verifier] = str.split('-');
  if (!isMunicipalityCode(municipality) || !isDate(birthdate)) return false;

  const digits = municipality + birthdate + correlative;
  const sum = correlative.startsWith('0')
    ? calculateVerificationOldFormat(digits)
    : calculateVerification(digits);

  return Number(verifier) === sum;
}

export default isNIT;
