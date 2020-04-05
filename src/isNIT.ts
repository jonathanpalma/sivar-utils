import isMunicipalityCode from './isMunicipalityCode';

export const nitRegExp = /(^\d{4})-(\d{6})-(\d{3})-(\d$)/;

function checkDigitOldFormat(digits: string) {
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += (digits.length + 1 - i) * Number(digits.charAt(i));
    sum %= 11;
  }
  return sum;
}

function checkDigit(digits: string) {
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum +=
      Number(digits.charAt(i)) *
      (3 + 6 * Math.floor(Math.abs((i + 5) / 6)) - i + 1);
  }
  sum %= 11;
  return sum > 1 ? 11 - sum : 0;
}

function setFullYear(year: string) {
  return Number(year) >=
    Number(new Date().getFullYear().toString().substr(-2)) + 1
    ? '19'.concat(year)
    : '20'.concat(year);
}

function isDate(str: string): boolean {
  const year = setFullYear(str.substring(4));
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
  const digits = municipality + birthdate + correlative + verifier;

  if (!isMunicipalityCode(municipality)) return false;
  if (!isDate(birthdate)) return false;
  let sum = 0;
  if (Number(correlative) <= 100) {
    sum = checkDigitOldFormat(digits);
  } else {
    sum = checkDigit(digits);
  }
  return sum === Number(verifier);
}

export default isNIT;
